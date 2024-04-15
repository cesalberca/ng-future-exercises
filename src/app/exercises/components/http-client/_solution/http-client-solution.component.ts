import { Component } from '@angular/core'
import { SolutionComponent } from '../../../../dashboard/delivery/components/solution/solution.component'
import { MdComponent } from '../../../../dashboard/delivery/components/markdown/markdown.component'
import { HttpClientComponent } from '../http-client.component'
import { HttpClient } from '@angular/common/http'
import { lastValueFrom } from 'rxjs'

type CreatePost = Omit<Post, 'id'>

interface Post {
  id: number
  title: string
  body: string
  userId: number
}

@Component({
  selector: 'app-http-client-solution',
  standalone: true,
  template: ` <button (click)="getPosts()">Get posts</button>
    <button (click)="createPost()">Create</button>
    <button (click)="getError()">Error</button>
    {{ createdPost?.title }}
    <div>
      @for (post of posts; track post.id) {
        <p>{{ post.title }}</p>
      }
    </div>`,
  imports: [SolutionComponent, MdComponent, HttpClientComponent],
})
export class HttpClientSolutionComponent {
  posts: Post[] = []
  createdPost: Post | null = null

  constructor(private readonly httpClient: HttpClient) {}

  async getPosts() {
    const result = await lastValueFrom(this.httpClient.get<Post[]>('posts'))
    this.posts = result
  }

  getError() {
    lastValueFrom(this.httpClient.get<Post[]>('non_existent_url'))
  }

  async createPost() {
    const body: CreatePost = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    }
    this.createdPost = await lastValueFrom(this.httpClient.post<Post>('posts', body))
  }
}
