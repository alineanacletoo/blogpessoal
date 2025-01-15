import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Postagem } from "../entities/postagem.entity";
import { Repository } from "typeorm";

@Injectable()
export class PostagemService{

    constructor(
        @InjectRepository(Postagem)
        private postagemRepository: Repository<Postagem>
    ){}

    async findAll(): Promise<Postagem[]>{
        return this.postagemRepository.find(); // SELECT * FROM tb_postagens;
    }

     async findById(id: number): Promise<Postagem> {

        // SELECT * FROM tb_postagem WHERE id - ?;
        const postagem = await this.postagemRepository.findOne({
            where: {
                id
            }
        })

        if(!postagem)
            throw new HttpException("Postagem não encontrada", HttpStatus.NOT_FOUND)
        
        return postagem;

    }

    async findByTitulo(titulo: string): Promise<Postagem[]>{
        return this.postagemRepository.find({
            where:{
                titulo: ILike(`%${titulo}%`)// ILike - Case Insensitive | Like - Case Sensitive
            }
        }); 
    }
        //gravar a informação no banco de dados
    async create(postagem: Postagem): Promise<Postagem>{

        //INSERT INTO tb_postagem (titulo, texto) VALUES (?, ?)
        return await this.postagemRepository.save(postagem);

    }

    async update(postagem: Postagem): Promise<Postagem>{
        await this.findById(postagem.id)


        // UPDATE tb_postagem SET titulo = postagem.titulo,
        // texto = postagem,texto, data = CURENT_TIMESTAR()
        // WHERE id = postagem.id
        return await this.postagemRepository.save(postagem);
    }

   async delete(id: number): Promise<DeleteResult> {
        
        let buscaPostagem = await this.findById(id);

        if (!buscaPostagem)
            throw new HttpException('Postagem não encontrada!', HttpStatus.NOT_FOUND);

        return await this.postagemRepository.delete(id);

    }
}
