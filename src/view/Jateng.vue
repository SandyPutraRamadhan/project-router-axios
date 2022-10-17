<template>
  <div>
    <div class="JaTenG">
      <h1>Provinsi Jawa Tengah</h1>
      <img src="../assets/jateng.png" alt="">
    </div>
    <div class="tabBrd">
      <form @submit.prevent="add">
        <table>
          <tr>
            <label for="">Pariwisata</label>
            <br>
            <!-- <td><input type="hidden" v-model="form.id" required></td> -->
            <input type="text" v-model="form.wisjateng" required />
          </tr>
          <tr>
            <label for="">Kota</label>
            <br>
            <input type="text" v-model="form.kotajateng" required />
          </tr>
          <tr>
           <label for="">Tradisi</label>
           <br>
            <input type="text" v-model="form.budayajateng" required />
          </tr>
          <tr>
            <label for="">Luas</label>
            <br>
            <input type="text" v-model="form.Transportasijateng" required />
          </tr>
          <tr>
            <label for="">Monumen</label>
            <br>
            <input type="text" v-model="form.imagejateng">
          </tr>
          <br />
          <button class="addBtn" type="submit" v-show="!updateSubmit">
            <i class="fas fa-location-arrow"></i>ADD
          </button>
          <!-- jika tidak update maka tombol update tidak muncul -->
          <button
            class="addBtn"
            type="button"
            v-show="updateSubmit"
            @click="update(form)"
          >
            Update
          </button>
          <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->
          </table>
        
      </form>
      <br />
    </div>
    <table class="table table-dark table-hover">
      <thead>
    <tr>
      <th scope="col">Wisata</th>
      <th scope="col">Kota</th>
      <th scope="col">Tradisi</th>
      <th scope="col">Luas</th>
      <th scope="col">Monumen</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="jateng in jatengs" :key="jateng.id">
      <td>{{ jateng.wisjateng }}</td>
      <td>{{ jateng.kotajateng }}</td>
      <td>{{ jateng.budayajateng }}</td>
      <td>{{ jateng.Transportasijateng }}</td>
      <td><img :src="jateng.imagejateng" alt="" width="100%" height="100%" /></td>
      <td style="text-align: center">
        <button class="Edit" @click="edit(jateng)"><i class="fas fa-edit"></i>Edit</button> ||
          <button class="Delete" @click="del(jateng)"><i class="fas fa-trash"></i>Delete</button>
      </td>
    </tr>
  </tbody>
    </table>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  name: "HomeE",
  data() {
    return {
      form: {
        id: "",
        wisjateng: "",
        kotajateng: "",
        budayajateng: "",
        Transportasijateng: "",
        imagejateng: "",
      },
      jatengs: "",
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/jatengs")
        .then((res) => {
          this.jatengs = res.data; //respon dari rest api dimasukan ke jabars
        })
        .catch((err) => {
          console.log(err);
        });
    },
    add() {
      axios.post("http://localhost:3000/jatengs/", this.form).then((res) => {
        this.load();
        this.form.id = "";
        this.form.wisjateng = "";
        this.form.kotajateng = "";
        this.form.budayajateng = "";
        this.form.Transportasijateng = "";
        this.form.imagejateng = "";
      });
    },
    edit(jateng) {
      this.updateSubmit = true;
      this.form.id = jateng.id;
      this.form.wisjateng = jateng.wisjateng;
      this.form.kotajateng = jateng.kotajateng;
      this.form.budayajateng = jateng.budayajateng;
      this.form.Transportasijateng = jateng.Transportasijateng;
      this.form.imagejateng = jateng.imagejateng;
    },
    update(form) {
      return axios
        .put("http://localhost:3000/jatengs/" + form.id, {
          wisjateng: this.form.wisjateng,
          kotajateng: this.form.kotajateng,
          budayajateng: this.form.budayajateng,
          Transportasijateng: this.form.Transportasijateng,
          imagejateng: this.form.imagejateng,
        })
        .then((res) => {
          this.load();
          this.form.id = "";
          this.form.wisjateng = "";
          this.form.kotajateng = "";
          this.form.budayajateng = "";
          this.form.Transportasijateng = "";
          this.form.imagejateng = "";
          this.updateSubmit = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(user) {
      axios.delete("http://localhost:3000/jatengs/" + user.id).then((res) => {
        this.load();
        let index = this.jatengs.indexOf(
          form.wisjateng,
          form.kotajateng,
          form.budayajateng,
          form.Transportasijateng,
          form.imagejateng
        );
        this.jatengs.splice(index, 1);
      });
    },
  },
};
</script>

<style>
h1 {
  text-align: center;
}
form {
  text-align: center;
  padding-top: 50px;
  width: 400px;
}
.addBtn {
  width: 300px;
  background-color: black;
  color: white;
}
.addBtn:hover {
  background-color: lightblue;
  color: black;
}
.tabBrd {
  margin-right: 50%;
  margin-left: 40%;
}
.Edit {
  background-color: lightgreen;
  color: white;
  border-radius: 5px;
}
.Delete {
  background-color: red;
  color: white;
  border-radius: 5px;
}
.JaTenG {
  display: flex;
  font-size: 30px;
  justify-content: center;
  align-items: center;
  font-family: 'Lobster', cursive;
}
.JaTenG img {
  width: 300px;
  height: 300px;
}
</style>