<template>
<div>
  <button @click="showToastNotif()">Show toast notif</button><br><br>
  <download-excel
    class="btn btn-default"
    :data="dataForExcel"
    worksheet="My Worksheet"
    name="filename.xls"
    >
    Download Excel (you can customize this with html code!)
    </download-excel>
</div>
</template>
<script>

  export default {
    components: {
    },
    methods:{
     showToastNotif() {
      this.$toast.open({
        message: "Test message from Vue",
        type: "success",
        duration: 5000,
        dismissible: true
      })
    }
    },
    data() {
        return{
            json_meta: [
                [
                    {
                    key: "charset",
                    value: "utf-8",
                    },
                ],
            ],

            dataForExcel: [
                { DESCRIPTION: "Nom du client", Valeur: "Hamuli" },
                { DESCRIPTION: "Prenom du client", Valeur: "Jean-Paul", },
                { DESCRIPTION: "Date de naissance", Valeur: "1994-05-08" },
                { DESCRIPTION: "Nom de la société", Valeur: "Connectis" },
                { DESCRIPTION: "N° de TVA", Valeur: "7683" },
                { DESCRIPTION: "N° du client Proximus", Valeur: "97889378" },
                { DESCRIPTION: "Numero de telephone Fixe", Valeur: "Connectis" },
                { DESCRIPTION: "Numero de N° de GSM", Valeur: "Connectis" },
                { DESCRIPTION: "Adresse mail", Valeur: "Connectis" },
                { DESCRIPTION: "Num IBAN (si Jo)", Valeur: "Connectis" },
                { DESCRIPTION: "Code postal", Valeur: "B765" },
                { DESCRIPTION: "Commune", Valeur: "Goma" },
                { DESCRIPTION: "Nom rue, Numero de porte", Valeur: "Connectis" },
                { DESCRIPTION: "Si elle est different, adresse d'installation des service", Valeur: "Connectis" },
                { DESCRIPTION: "Produit(s) à la concurrence", Valeur: "Connectis" },
                { DESCRIPTION: "Produits Vendu(s)", Valeur: "Connectis" },
                { DESCRIPTION: "Prix Plein et Prix promos", Valeur: "Connectis" },
                { DESCRIPTION: "Dates d'installation souhaitées (3)", Valeur: "Connectis" },
                { DESCRIPTION: "Information pour l'encodage", Valeur: "Connectis" },
                { DESCRIPTION: "N° de telephone (fixe ou mobile) à porter vers proximus", Valeur: "Connectis" },
                { DESCRIPTION: "N° de client chez la concurrence", Valeur: "Connectis" },
                { DESCRIPTION: "N° d'easy switch", Valeur: "Connectis" },
                { DESCRIPTION: "N° de carte sim du/des numero(s) de GSM à porter (seulement si carte prépayé)", Valeur: "Connectis" },
                { DESCRIPTION: "Nom client mobile concurrence et code client", Valeur: "Connectis" },
                { DESCRIPTION: "Lien partageable de l'enregistrement(drive)", Valeur: "https://www.connectis.co" },
                { DESCRIPTION: "Commentaire", Valeur: "Connectis" },
            ],
        }
    },
  };
</script>