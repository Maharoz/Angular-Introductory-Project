import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-git-hub-followers',
  templateUrl: './git-hub-followers.component.html',
  styleUrls: ['./git-hub-followers.component.css']
})
export class GitHubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private route : ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() {
   let Obs = Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .switchMap(combined =>{
      let id = combined[0].get('id');
      let page = combined[1].get('page');


      return this.service.getAll();
     
    })
    .subscribe(followers =>this.followers = followers);


  //   this.route.paramMap
  //   .subscribe(params =>{

  //   });
  //   //let id = this.route.snapshot.paramMap.get('id');

  //   this.route.queryParamMap
  //   .subscribe(params =>{
      
  //   });

  //  // let page=this.route.snapshot.paramMap.get('page');
  //   this.service.getAll()
  //   .subscribe(followers => this.followers = followers);
  }

}
