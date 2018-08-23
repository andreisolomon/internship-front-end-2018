import {User} from '../user/user.model';
import {Observable} from 'rxjs';
import {api} from '../../../../assets/data/apiUrl';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

export interface Config {
  FirstName: string;
  LastName: string;
  Mail: string;
  Admin: boolean;
  Points: number;
  createdAt: string;
}
@Injectable()

export class UserListService {
  constructor(private http: HttpClient) { }

// getConfig(){
//
// }
  private data: User[] = [
    // /home/anca/projects/internship-front-end-2018/src/assets

    new User(false, 1, '../../../../../assets/images/img3.jpeg', 'Mr. Nice', ' bla ', '15 OCT 2018', ' ', 'bla ', 3, '15 OCT 2018'),
    new User(true, 1, '../../../../../assets/images/img3.jpeg', 'Mr. Nice', ' bla ', '15 OCT 2018', ' ', 'hgh', 3, '15 OCT 2018'),
    new User(true, 1, '../../../../../assets/images/img3.jpeg', 'Mr. Nice', ' bla ', '15 OCT 2018', ' ', 'hghg', 3, '15 OCT 2018'),
  ];

  getData() {
    return this.data;
  }

  getUserById(id: number) {
    for (let user of this.data) {
      if (user.getId() === id) {
        return user;
      }
    }
    return false;
  }

  getUserAdminById(id: number) {
    for (let user of this.data) {
      if (user.getId() === id) {
        return user.getAdmin();
      }
    }
  }

  getUserImageById(id: number) {
    for (let user of this.data) {
      if (user.getId() === id) {
        return user.getImage();
      }
    }
  }

  getUserScoreById(id: number) {
    for (let user of this.data) {
      if (user.getId() === id) {
        return user.getScore();
      }
    }
  }

  getUserDateById(id: number) {
    for (let user of this.data) {
      if (user.getId() === id) {
        return user.getImage();
      }
    }
  }

  getUserTagsById(id: number) {
    for (let user of this.data) {
      if (user.getId() === id) {
        return user.getTags();
      }
    }
  }

  getUserFirstNameById(id: number) {
    for (let user of this.data) {
      if (user.getId() === id) {
        return user.getFirstName();
      }
    }
  }

  getUserLastNameById(id: number) {
    for (let user of this.data) {
      if (user.getId() === id) {
        return user.getLastName();
      }
    }
  }

  getUserEmailById(id: number) {
    for (let user of this.data) {
      if (user.getId() === id) {
        return user.getEmail();
      }
    }
  }

  getUserPasswordById(id: number) {
    for (let user of this.data) {
      if (user.getId() === id) {
        return user.getPassword();
      }
    }
  }
  getInfo() {
    return this.http.get(api.base + api.user );
  }
  // <Config>
}

