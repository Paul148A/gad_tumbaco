import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { UsuariosEntity } from "./usuarios.entity";
import { EstadosEntity } from "./estados.entity";
import { DepartamentosEntity } from "./departamentos.entity";
import { CertificadosEntity } from "./certificados.entity";

@Entity({ name: 'oficios' })

export class OficiosEntity {
    @PrimaryGeneratedColumn()
    id_oficios: number;

    @Column({
        name: 'asunto', type: 'varchar', length: 200,
        comment: 'nombres del asunto. Ejm: Prestamo de Bienes ',
    })
    asunto: string;

    @Column({
        name: 'fecha_recibido', type: 'date',
        comment: 'Fecha cuando se recibe el oficion ',
    })
    fecha_recibido: Date;

    @Column({
        name: 'fecha_oficio', type: 'date',
        comment: 'Fecha cuando se envia el oficio a un depatamento',
    })
    fecha_oficio: Date;

    @Column({
        name: 'organizacion_remitente', type: 'varchar', length: 100,
        comment: 'Nombre de la organizacion remitente',
    })
    organizacion_remitente: string;

    @Column({
        name: 'nombres_firmante', type: 'varchar', length: 100,
        comment: 'Nombre de quien aprueba',
    })
    nombres_firmante: string;

    @Column({
        name: 'apellidos_firmante', type: 'varchar', length: 100,
        comment: 'Apellidos de quien aprueba',
    })
    apellidos_firmante: string;

    @Column({
        name: 'cedula_firmante', type: 'varchar', length: 20,
        comment: 'Cedula de quien aprueba',
    })
    cedula_firmante: string;

    @Column({
        name: 'archivos', type: 'varchar', length: 255,
        comment: 'Subir el archivo escaneado',
    })
    archivos: string;

    @Column({
        name: 'requerimiento', type: 'varchar', length: 255,
        comment: 'Cual es su peticion y lo que nesecita la organizacion',
    })
    requerimiento: string;

    @Column({
        name: 'referencia', type: 'varchar', length: 100,
        comment: 'Número de Referencia donde se emitio el oficio',
    })
    referencia: string;

    @Column({
        name: 'delegacion', type: 'varchar', length: 100,
        comment: 'Nombre del Departamento a donde va a ser asignado',
    })
    delegacion: string;

    @Column({
        name: 'prioridad', type: 'varchar', length: 100,
        comment: 'Opciones: alta, media, baja',
    })
    prioridad: string;

    @Column({
        name: 'comentario', type: 'varchar', length: 100,
        comment: 'Comentario sobre le oficio',
    })
    comentario: string;

     /*Relacion: varios usuario puede tener varios oficios */ 
    @ManyToOne(type => UsuariosEntity, usuario => usuario.oficios)
    @JoinColumn({ name: 'id_usuario' })
    usuarios: UsuariosEntity;

     /*Relacion: varios estados puede tener un oficio */ 
    @ManyToOne(type => EstadosEntity, estado => estado.oficios)
    @JoinColumn({ name: 'id_estado' })
    estados: EstadosEntity;

     /*Relacion: varios departamentos puede tener un oficio */ 
    @ManyToOne(type => DepartamentosEntity, departamento => departamento.oficios)
    @JoinColumn({ name: 'id_departamento' })
    departamentos: DepartamentosEntity;

    /*Relacion uno a uno*/
    @OneToOne(() => CertificadosEntity)
    @JoinColumn({ name: 'id_certificado' }) 
    certificado: CertificadosEntity;
}