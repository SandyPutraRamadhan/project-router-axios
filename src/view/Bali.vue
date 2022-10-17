<template>
  <div>
    <div class="BaLi">
      <h1>Provinsi Bali</h1>
      <img src="../assets/bali.png" alt="">
    </div>
    <div class="tabBrd">
      <form @submit.prevent="add">
        <table>
          <tr>
            <label for="">Pariwisata</label>
            <br>
            <!-- <td><input type="hidden" v-model="form.id" required></td> -->
            <input type="text" v-model="form.wisbali" required />
          </tr>
          <tr>
            <label for="">Tradisi</label>
            <br>
            <input type="text" v-model="form.tradisi" required />
          </tr>
          <tr>
            <label for="">Kuliner</label>
            <br>
            <input type="text" v-model="form.kuliner" required />
          </tr>
          <tr>
            <label for="">Bahasa</label>
            <br>
            <input type="text" v-model="form.Transportasibali" required />
          </tr>
          <tr>
            <label for="">Monumen</label>
            <br>
            <input type="text" v-model="form.imagebali">
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
          </table>
          <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->
        
      </form>
      <br />
    </div>
    <table class="table table-dark table-hover">
      <thead>
    <tr>
      <th scope="col">Wisata</th>
      <th scope="col">Tradisi</th>
      <th scope="col">kuliner</th>
      <th scope="col">Bahasa</th>
      <th scope="col">Monumen</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="bali in balis" :key="bali.id">
      <td>{{ bali.wisbali }}</td>
      <td>{{ bali.tradisi }}</td>
      <td>{{ bali.kuliner }}</td>
      <td>{{ bali.Transportasibali }}</td>
      <td><img :src="bali.imagebali" alt="" width="100%" height="100%" /></td>
      <td style="text-align: center">
        <button class="Edit" @click="edit(bali)"><i class="fas fa-edit"></i>Edit</button> ||
          <button class="Delete" @click="del(bali)"><i class="fas fa-trash"></i>Delete</button>
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
        wisbali: "",
        tradisi: "",
        kuliner: "",
        Transportasibali: "",
        imagebali: "",
      },
      balis: "",
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/balis")
        .then((res) => {
          this.balis = res.data; //respon dari rest api dimasukan ke jabars
        })
        .catch((err) => {
          console.log(err);
        });
    },
    add() {
      axios.post("http://localhost:3000/balis/", this.form).then((res) => {
        this.load();
        this.form.id = "";
        this.form.wisbali = "";
        this.form.tradisi = "";
        this.form.kuliner = "";
        this.form.Transportasibali = "";
        this.form.imagebali = "";
      });
    },
    edit(bali) {
      this.updateSubmit = true;
      this.form.id = bali.id;
      this.form.wisbali = bali.wisbali;
      this.form.tradisi = bali.tradisi;
      this.form.kuliner = bali.kuliner;
      this.form.Transportasibali = bali.Transportasibali;
      this.form.imagebali = bali.imagebali;
    },
    update(form) {
      return axios
        .put("http://localhost:3000/balis/" + form.id, {
          wisbali: this.form.wisjatim,
          tradisi: this.form.tradisi,
          kuliner: this.form.kuliner,
          Transportasibali: this.form.Transportasibali,
          imagebali: this.form.imagebali,
        })
        .then((res) => {
          this.load();
          this.form.id = "";
          this.form.wisbali = "";
          this.form.tradisi = "";
          this.form.kuliner = "";
          this.form.Transportasibali = "";
          this.form.imagebali = "";
          this.updateSubmit = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(user) {
      axios.delete("http://localhost:3000/balis/" + user.id).then((res) => {
        this.load();
        let index = this.balis.indexOf(
          form.wisbali,
          form.tradisi,
          form.kuliner,
          form.Transportasibali,
          form.imagebali
        );
        this.balis.splice(index, 1);
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
.BaLi {
  display: flex;
  font-size: 30px;
  justify-content: center;
  align-items: center;
  font-family: 'Lobster', cursive;
}
.BaLi img {
   width: 300px;
   height: 300px;
}
.table {
  text-align: center;
}
</style>