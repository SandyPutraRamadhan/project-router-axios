<template>
  <div>
    <div class="jaKar">
      <h1>Provinsi DKI Jakarta</h1>
      <img src="../assets/monas.png" alt="">
    </div>
    <div class="tabBrd">
      <form @submit.prevent="add">
        <table>
          <tr>
           <label for="">Pariwisata</label>
           <br>
            <!-- <td><input type="hidden" v-model="form.id" required></td> -->
            <input type="text" v-model="form.wis" required />
          </tr>
          <tr>
            <label for="">Kota/Daerah Ibu Kota Jakarta</label>
            <br>
            <input type="text" v-model="form.kotajakar" required />
          </tr>
          <tr>
            <label for="">Tradisi</label>
            <br>
            <input type="text" v-model="form.budayajakar" required />
          </tr>
          <tr>
            <label for="">Luas</label>
            <br>
            <input type="text" v-model="form.Luasjakar" required />
          </tr>
          <tr>
            <label for="">Monumen</label>
            <br>
            <input type="text" v-model="form.image">
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
      <th scope="col">Kota/Daerah</th>
      <th scope="col">Tradisi</th>
      <th scope="col">Luas</th>
      <th scope="col">Monumen</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="jakar in jakartas" :key="jakar.id">
      <td>{{ jakar.wis }}</td>
      <td>{{ jakar.kotajakar }}</td>
      <td>{{ jakar.budayajakar }}</td>
      <td>{{ jakar.Luasjakar }}</td>
      <td><img :src="jakar.image" alt="" width="100%" height="100%" /></td>
      <td style="text-align: center">
        <button class="Edit" @click="edit(jakar)"><i class="fas fa-edit"></i>Edit</button> ||
          <button class="Delete" @click="del(jakar)"><i class="fas fa-trash"></i>Delete</button>
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
        wis: "",
        kotajakar: "",
        budayajakar: "",
        Luasjakar: "",
        image: "",
      },
      jakartas: "",
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/jakartas")
        .then((res) => {
          this.jakartas = res.data; 
        })
        .catch((err) => {
          console.log(err);
        });
    },
    add() {
      axios.post("http://localhost:3000/jakartas/", this.form).then((res) => {
        this.load();
        this.form.id = "";
        this.form.wis = "";
        this.form.kotajakar = "";
        this.form.budayajakar = "";
        this.form.Luasjakar = "";
        this.form.image = "";
      });
    },
    edit(jakar) {
      this.updateSubmit = true;
      this.form.id = jakar.id;
      this.form.wis = jakar.wis;
      this.form.kotajakar = jakar.kotajakar;
      this.form.budayajakar = jakar.budayajakar;
      this.form.Luasjakar = jakar.Luasjakar;
      this.form.image = jakar.image;
    },
    update(form) {
      return axios
        .put("http://localhost:3000/jakartas/" + form.id, {
          wis: this.form.wis,
          kotajakar: this.form.kotajakar,
          budayajakar: this.form.budayajakar,
          Luasjakar: this.form.Luasjakar,
          image: this.form.image,
        })
        .then((res) => {
          this.load();
          this.form.id = "";
          this.form.wis = "";
          this.form.kotajakar = "";
          this.form.budayajakar = "";
          this.form.Luasjakar = "";
          this.form.image = "";
          this.updateSubmit = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(user) {
      axios.delete("http://localhost:3000/jakartas/" + user.id).then((res) => {
        this.load();
        let index = this.jakartas.indexOf(
          form.wis,
          form.kotajakar,
          form.budayajakar,
          form.Luasjakar,
          form.image
        );
        this.jakartas.splice(index, 1);
      });
    },
    out() {
      sessionStorage.clear();
      this.$router.push("/");
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
.jaKar {
  display: flex;
  font-size: 30px;
  justify-content: center;
  align-items: center;
  font-family: 'Lobster', cursive;
}
.jaKar img {
  width: 230px;
  height: 300px;
}
.table {
  margin-left: 173px;
  width: 73rem;
}
</style>