<template>
  <div>
    <div class="JaTim">
      <h1>Provinsi Jawa Timur</h1>
      <img src="../assets/jatim.png" alt="">
    </div>
    <div class="tabBrd">
      <form @submit.prevent="add">
        <table>
          <tr>
            <label for="">Pariwisata</label>
            <br>
            <!-- <td><input type="hidden" v-model="form.id" required></td> -->
            <input type="text" v-model="form.wisjatim" required />
          </tr>
          <tr>
            <label for="">Kota</label>
            <br>
            <input type="text" v-model="form.kotajatim" required />
          </tr>
          <tr>
            <label for="">Tradisi</label>
            <br>
            <input type="text" v-model="form.budayajatim" required />
          </tr>
          <tr>
            <label for="">Luas Kota</label>
            <br>
            <input type="text" v-model="form.Transportasijatim" required />
          </tr>
          <tr>
           <label for="">Monumen</label>
           <br>
            <input type="text" v-model="form.imagejatim">
          </tr>
          <br />
          </table>
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
        
      </form>
      <br />
    </div>
    <table class="table table-dark table-hover">
      <thead>
    <tr>
      <th scope="col">Wisata</th>
      <th scope="col">Kota</th>
      <th scope="col">Tradisi</th>
      <th scope="col">Luas Kota</th>
      <th scope="col">Monumen</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="jatim in jatims" :key="jatim.id">
      <td>{{ jatim.wisjatim }}
      <td>{{ jatim.kotajatim }}</td>
      <td>{{ jatim.budayajatim }}</td>
      <td>{{ jatim.Transportasijatim }}</td>
      <td><img :src="jatim.imagejatim" alt="" width="100%" height="100%" /></td>
      <td style="text-align: center">
        <button class="Edit" @click="edit(jatim)"><i class="fas fa-edit"></i>Edit</button> ||
          <button class="Delete" @click="del(jatim)"><i class="fas fa-trash"></i>Delete</button>
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
        wisjatim: "",
        kotajatim: "",
        budayajatim: "",
        Transportasijatim: "",
        imagejatim: "",
      },
      jatims: "",
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/jatims")
        .then((res) => {
          this.jatims = res.data; //respon dari rest api dimasukan ke jabars
        })
        .catch((err) => {
          console.log(err);
        });
    },
    add() {
      axios.post("http://localhost:3000/jatims/", this.form).then((res) => {
        this.load();
        this.form.id = "";
        this.form.wisjatim = "";
        this.form.kotajatim = "";
        this.form.budayajatim = "";
        this.form.Transportasijatim = "";
        this.form.imagejatim = "";
      });
    },
    edit(jatim) {
      this.updateSubmit = true;
      this.form.id = jatim.id;
      this.form.wisjatim = jatim.wisjatim;
      this.form.kotajatim = jatim.kotajatim;
      this.form.budayajatim = jatim.budayajatim;
      this.form.Transportasijatim = jatim.Transportasijatim;
      this.form.imagejatim = jatim.imagejatim;
    },
    update(form) {
      return axios
        .put("http://localhost:3000/jatims/" + form.id, {
          wisjatim: this.form.wisjatim,
          kotajatim: this.form.kotajatim,
          budayajatim: this.form.budayajatim,
          Transportasijatim: this.form.Transportasijatim,
          imagejatim: this.form.imagejatim,
        })
        .then((res) => {
          this.load();
          this.form.id = "";
          this.form.wisjatim = "";
          this.form.kotajatim = "";
          this.form.budayajatim = "";
          this.form.Transportasijatim = "";
          this.form.imagejatim = "";
          this.updateSubmit = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(user) {
      axios.delete("http://localhost:3000/jatims/" + user.id).then((res) => {
        this.load();
        let index = this.jatims.indexOf(
          form.wisjatim,
          form.kotajatim,
          form.budayajatim,
          form.Transportasijatim,
          form.imagejatim
        );
        this.jatims.splice(index, 1);
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
.JaTim {
  display: flex;
  font-size: 30px;
  justify-content: center;
  align-items: center;
  font-family: 'Lobster', cursive;
}
.JaTim img {
  width: 280px;
  height: 300px;
}
</style>