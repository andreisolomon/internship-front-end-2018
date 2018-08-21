import {User} from '../user/user.model';

export class UserListService {

  constructor() {
  }

  private data: User[] = [
    // /home/anca/projects/internship-front-end-2018/src/assets
    new User(1, 1, '../../../../../assets/images/img3.jpeg', 'Mr. Nice', ' bla ',  '15 OCT 2018',' ' ,'', 3,''),
    new User(1, 1, '../../../../../assets/images/img3.jpeg', 'Mr. Nice', ' bla ',  '15 OCT 2018',' ' ,'', 3,''),
    new User(1, 1, '../../../../../assets/images/img3.jpeg', 'Mr. Nice', ' bla ',  '15 OCT 2018',' ' ,'', 3,'')
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












  
}
