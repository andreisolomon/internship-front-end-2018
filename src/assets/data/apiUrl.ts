export const api = {
  base: 'http://192.168.151.36:8000/api',
  get user() {return this.base + '/user'},
  get register() {return this.base + '/register'},
  get category() {return this.base + '/category'},
  get course() {return this.base + '/course'},
  get chapter() {return this.base + '/chapter'},
  get quiz() {return this.base + '/quiz'}
};
