import {User} from '../user/user.model';

export class UserListService {

  constructor() {
  }

  private data: User[] = [
    new User(1, 1, '../../../../../assets/images/img3.jpeg', 'Mr. Nice', ' bla ', 3, '15 OCT 2018'),
    new User(0, 2, '../../../../../assets/images/img3.jpeg', 'Mr. Nice', ' bla ', 3, '15 OCT 2018'),
    new User(0, 3, '../../../../../assets/images/img3.jpeg', 'Mr. Nice', ' bla ', 3, '15 OCT 2018')
  ];

  getData() {
    return this.data;
  }

  getUseryById(id: number) {
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

  getUserNameById(id: number) {
    for (let user of this.data) {
      if (user.getId() === id) {
        return user.getName();
      }
    }
  }

}
