import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
    providedIn: 'root'
})
export class LanguajeService {
    push(arg0: any) {
      throw new Error('Method not implemented.');
    }

    constructor(
        private afs: AngularFirestore
    ) {}

    add(nombre: String, plataforma:String,img: String,description: String, tipo: String){
        console.log('Lenguaje guardado');

        this.afs.collection('/lenguajes').add({
            name: nombre,
            plataforma:plataforma,
            img: img,
            description: description,
            tipo: tipo
        });
    }

    list() {
        return this.afs.collection('/lenguajes').snapshotChanges();
    }

    delete(id: String) {
        this.afs.doc(`/lenguajes/${id}`).delete();
    }

    get(id: String) {
        return this.afs.doc(`/lenguajes/${id}`).valueChanges();
    }

    update(id: String, nombre: String, plataforma:String,img: String,description: String, tipo: String) {
        this.afs.doc(`/lenguajes/${id}`).update({
            name: nombre,
            plataforma:plataforma,
            img: img,
            description: description,
            tipo: tipo
        });
    }

}