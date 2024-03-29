import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { RolesEntity } from "./roles.entity";
import { EstadosEntity } from "./estados.entity";
import { OficiosEntity } from "./oficios.entity";

@Entity({name: 'usuarios'})

export class UsuariosEntity{

    @PrimaryGeneratedColumn()
    id_usuarios: number; 

    /*Campo nombre del usuario*/ 
     @Column({

        name: 'nombres',
        type: 'varchar',
        length: 100,
        comment: 'nombres del usuario',
    
    })
    nombres: string;

    /*Campo apellidos del usuario*/ 
    @Column({

        name: 'apellidos',
        type: 'varchar',
        length: 100,
        comment: 'apellidos del usuario',
    
    })
    apellidos: string;

    /*Campo clave del usuario*/ 
    @Column({
        name: 'clave',
        type: 'varchar',
        length: 16,
        comment: 'clave del usuario',
    
    })
    clave: string;

    /*Campo correo del usuario*/ 
      @Column({
        name: 'correo',
        type: 'varchar',
        length: 100,
        comment: 'correo del usuario',
    
    })
    correo: string;

    /*Campo identificacion del usuario*/ 
    @Column({

        name: 'identificacion',
        type: 'varchar',
        length: 20,
        comment: 'identificacion del usuario',
    
    })
    identificacion: string;

    /*Campo celular del usuario*/ 
    @Column({

        name: 'celular',
        type: 'varchar',
        length: 10,
        comment: 'celular del usuario',
    
    })
    celular: string;
    
/*Relacion: muchos usarios puede tener un rol */ 
    @ManyToOne(type => RolesEntity, rol => rol.usuarios)
    @JoinColumn({ name: 'id_roles' }) 
    rol: RolesEntity;

/*Relacion: muchos usarios puede tener un estado */ 
    @ManyToOne(type => EstadosEntity, estado => estado.usuarios)
    @JoinColumn({ name: 'id_estado' }) 
    estado: EstadosEntity;

 /*Relacion: un usario puede tener varios oficios */ 
    @OneToMany(type => OficiosEntity, oficio => oficio.usuarios)
    @JoinColumn({ name: 'id_oficios' }) 
    oficios: OficiosEntity[];
}