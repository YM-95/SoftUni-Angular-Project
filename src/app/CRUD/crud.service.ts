import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Card } from '../interface/product-card';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root',
})

export class CRUDService {

  itemsCollection: AngularFireList<Card[]> | undefined
  singleItem: Observable<Card> | undefined
  folder: any;
  constructor(public db: AngularFireDatabase, public router: Router, public storage: AngularFireStorage) { }

  getItems(): Observable<Card[]> {
    return this.db.list<Card>('/listings').snapshotChanges().pipe(
      map((changes: any[]) =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  getSingleItem(id: string) {
    this.db.database.ref('/listings/' + id).on('value', snapshot => {
      if (snapshot) {
        this.singleItem = snapshot.val()
      } else {
        alert('This item not exist in Database!')
      }
    })
    return this.singleItem
  }

  addItem(item: any) {
    this.db.database.ref('/listings').push(item)
    this.storage.upload('images/', item.image)
    this.router.navigate(['user-colection'])
  }


  updateItem(id: string, item: Card) {
    this.db.database.ref('/listings/' + id).update(item)
    this.router.navigate(['user-colection'])
  }

  deleteItem(id: string) {
    this.db.database.ref('/listings/' + id).remove()
    this.router.navigate(['user-colection'])
  }




}
