import { Injectable } from '@angular/core';
import { AngularFireAction, AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Card } from '../interface/product-card';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root',
})

export class CRUDService {

  // itemsCollection: AngularFirestoreCollection<User>;
  // items: Observable<User[]>;

  // constructor(public afs: AngularFirestore, public router: Router) {
  // this.itemsCollection = this.afs.collection<any>('users')
  // this.items = this.itemsCollection.valueChanges();
  // }
  // getItems() {
  //   return this.items
  // }

  // addItems(data: Card) {
  //   this.afs.collection('movies')
  //     .add(data)
  //     .then(() => {
  //       this.router.navigate(['/catalog']);
  //     }).catch(error => {
  //       window.alert(error.message)
  //     });
  // }

  itemsCollection: AngularFireList<Card[]> | undefined
  singleItem: Observable<Card> | undefined
  constructor(public db: AngularFireDatabase) { }

  getItems(): Observable<Card[]> {
    return this.db.list<Card>('/listings').snapshotChanges().pipe(
      map((changes: any[]) =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  // getSingleItem(id: string) {
  //   this.db.database.ref('/listings/' + id).get().then(res => {
  //     if (res) {
  //       this.singleItem = res.val()
  //     } else {
  //       alert('This item not exist in Database!')
  //     }
  //   })
  //   return this.singleItem
  // }

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

}



