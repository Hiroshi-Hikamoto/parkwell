import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    constructor(
        private afs: AngularFirestore
    ) {}

    add(name: String, description: String){
        console.log('Guardar película');
        this.afs.collection('/movies').add({
            name: name,
            description: description
        });
    }

    list() {
        return this.afs.collection('/movies').snapshotChanges();
    }

    delete(id: String) {
        this.afs.doc(`/movies/${id}`).delete();
    }

    get(id: String) {
        return this.afs.doc(`/movies/${id}`).valueChanges();
    }

    update(id: String, name: String, description: String) {
        this.afs.doc(`/movies/${id}`).update({
            name: name,
            description: description
        });
    }

}