<template>
  <div>
    <div class="jaBaR">
      <h1>Provinsi Jawa Barat</h1>
      <img src="../assets/jabar.png" alt="">
    </div>
    <div class="tabBrd">
      <form @submit.prevent="add">
        <table>
          <tr>
           <label for="">Pariwisata</label>
           <br>
            <!-- <td><input type="hidden" v-model="form.id" required></td> -->
            <input type="text" v-model="form.wisjabar" required />
          </tr>
          <tr>
            <label for="">Kota</label>
            <br>
            <input type="text" v-model="form.kota" required />
          </tr>
          <tr>
            <label for="">Tradisi</label>
            <br>
            <input type="text" v-model="form.budayajabar" required />
          </tr>
          <tr>
            <label for="">Transportasi</label>
            <br>
            <input type="text" v-model="form.Transportasijabar" required />
          </tr>
          <tr>
            <label for="">Monumen</label>
            <br>
            <input type="text" v-model="form.imagejabar">
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
      <th scope="col">Transportasi</th>
      <th scope="col">Monumen</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="jabar in jabars" :key="jabar.id">
      <td>{{ jabar.wisjabar }}</td>
      <td>{{ jabar.kota }}</td>
      <td>{{ jabar.budayajabar }}</td>
      <td>{{ jabar.Transportasijabar }}</td>
      <td><img :src="jabar.imagejabar" alt="" width="100%" height="100%" /></td>
      <td style="text-align: center">
        <button class="Edit" @click="edit(jabar)"><i class="fas fa-edit"></i>Edit</button> ||
          <button class="Delete" @click="del(jabar)"><i class="fas fa-trash"></i>Delete</button>
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
        wisjabar: "",
        kota: "",
        budayajabar: "",
        Transportasijabar: "",
        imagejabar: "",
      },
      jabars: "",
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/jabars")
        .then((res) => {
          this.jabars = res.data; //respon dari rest api dimasukan ke jabars
        })
        .catch((err) => {
          console.log(err);
        });
    },
    add() {
      axios.post("http://localhost:3000/jabars/", this.form).then((res) => {
        this.load();
        this.form.id = "";
        this.form.wisjabar = "";
        this.form.kota = "";
        this.form.budayajabar = "";
        this.form.Transportasijabar = "";
        this.form.imagejabar = "";
      });
    },
    edit(jabar) {
      this.updateSubmit = true;
      this.form.id = jabar.id;
      this.form.wisjabar = jabar.wisjabar;
      this.form.kota = jabar.kota;
      this.form.budayajabar = jabar.budayajabar;
      this.form.Transportasijabar = jabar.Transportasijabar;
      this.form.imagejabar = jabar.imagejabar;
    },
    update(form) {
      return axios
        .put("http://localhost:3000/jabars/" + form.id, {
          wisjabar: this.form.wisjabar,
          kota: this.form.kota,
          budayajabar: this.form.budayajabar,
          Transportasijabar: this.form.Transportasijabar,
          imagejabar: this.form.imagejabar,
        })
        .then((res) => {
          this.load();
          this.form.id = "";
          this.form.wisjabar = "";
          this.form.kota = "";
          this.form.budayajabar = "";
          this.form.Transportasijabar = "";
          this.form.imagejabar = "";
          this.updateSubmit = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(user) {
      axios.delete("http://localhost:3000/jabars/" + user.id).then((res) => {
        this.load();
        let index = this.jabars.indexOf(
          form.wisjabar,
          form.kota,
          form.budayajabar,
          form.Transportasijabar,
          form.imagejabar
        );
        this.jabars.splice(index, 1);
      });
    },
  },
};
</script>

<style>
.border {
  width: 100%;
}
th {
  border: 2px solid;
  width: 400px;
}
td {
  border: 2px solid;
}
h1 {
  text-align: center;
}
form {
  text-align: center;
  padding-top: 50px;
  width: 400px;
}
.clr {
  background-color: blue;
  color: white;
}
.addBtn {
  width: 300px;
  background-color: lightgreen;
  color: white;
}
.addBtn:hover {
  background-color: gray;
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
.jaBaR {
  display: flex;
  font-size: 30px;
  justify-content: center;
  align-items: center;
  font-family: 'Lobster', cursive;
}
.jaBaR img {
  width: 230px;
  height: 300px;
}
.table {
  margin-left: 173px;
  width: 73rem;
}
</style>