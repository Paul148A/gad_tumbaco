import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne } from "typeorm";
import { BienesEntity } from "./bienes.entity";
import { CertificadosEntity } from "./certificados.entity";

@Entity({name: 'solicitud_bienes'})

export class SolicitudBienesEntity{

    @PrimaryGeneratedColumn()
    id_solicitud_bienes: number; 
    
    /*Campo nombre del responsable de la solicitud*/ 
    @Column({
        name: 'nombres_responsable',
        type: 'varchar',
        length: 100,
        comment: 'nombres del responsable',
    
    })
    nombreResponsable: string;

    /*Campo apellido del responsable de la solicitud*/ 
    @Column({
        name: 'apellidos_responsable',
        type: 'varchar',
        length: 100,
        comment: 'apellidos del responsable',
    })
    apellidoResponsable: string;
    /*Campo del destino de la solicitud*/ 
    @Column({
        name: 'destino',
        type: 'varchar', 
        comment: 'destino de la solicitud',
    })
   destino: string;

   /*Campo de la movilizacion de la solicitud*/ 
   @Column({
    name: 'movilizacion',
    type: 'varchar',
    length: 100,
    comment: 'movilizacion para la solicitud',
    })
    movilizacion: string;

    /*Campo de la durecion del evento*/ 
    @Column({
        name: 'duracion_evento',
        type: 'varchar',
        length: 100,
        comment: 'Duracion del evento'
    })
    duracionEvento: string;

    /*Campo de repartidor del bien/es*/
    @Column({
        name: 'repartidor',
        type: 'varchar',
        length: 100,
        comment:'repartidos del bien o bienes',
    })
    repartidor:string;

    /*Campo del receptor del bien */
    @Column({
        name: 'receptor',
        type: 'varchar',
        length: 100,
        comment: 'receptor del bien o bienes',
    })
    receptor: string;


 /*Relacion: varios bienes puede tener una solicitud */ 
    @ManyToOne(type => BienesEntity, bienes => bienes.solicitud_bienes)
    @JoinColumn({ name: 'id_bienes' })
    bienes: BienesEntity;

     /*Relacion: varios certificados puede tener una solicitud */ 
    @ManyToOne(type => CertificadosEntity, certificado => certificado.solicitud_bienes)
    @JoinColumn({ name: 'id_certificados' })
    certificados: CertificadosEntity;
}


