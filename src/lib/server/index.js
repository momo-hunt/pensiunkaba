import { SECRET_URL_API } from "$env/static/private";

class DB {
  constructor() {
    this.req = {};
  }

  async fetchData() {
    const url = SECRET_URL_API + "?req=" + JSON.stringify(this.req);
    // console.log("result api :>> ", this.req);
    const respon = await fetch(url);
    const result = await respon.json();
    // console.log("result api :>> ", result);
    return result;
  }

  collection(sheet) {
    this.req = { sheet };
    return this;
  }

  async read(opt) {
    this.req = { ...this.req, action: "read", ...opt };
    return await this.fetchData();
  }

  async create(body, opt) {
    this.req = { ...this.req, action: "create", body, ...opt };
    return await this.fetchData();
  }

  async update(id, body, opt) {
    this.req = { ...this.req, action: "update", id, body, ...opt };
    return await this.fetchData();
  }

  async delete(id) {
    this.req = { ...this.req, action: "delete", id, ...opt };
    return await this.fetchData();
  }
}

export const db = new DB();
