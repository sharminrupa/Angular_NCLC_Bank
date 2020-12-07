import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class ImageService {

    constructor(private http: HttpClient) {}

    public uploadImage(image: File): Observable<any> {
      const formData = new FormData();
      formData.append('file', image);
      return this.http.post('http://localhost:8080/FileUploadService/image', formData);
    }
  }
