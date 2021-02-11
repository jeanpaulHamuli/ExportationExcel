<template>
  <div class="about">
    <h1>This is an about page</h1>
   <export-excel
	    class   = "btn btn-default"
	    :data   = "json_data"
	    :fields = "json_fields"
	    worksheet = "My Worksheet"
	    name    = "filename.xls">
	 
	    <button>Download</button>
	</export-excel>
  <button @click="showToast()">Show Toast</button>
	<div>JP : {{ hours }}</div>
	<!-- <modal name="example">This is an example</modal> -->
	<modal name="example"
         :width="300"
         :height="300"
         :adaptive="true">
    Hello, Properties!
  </modal>

	<!-- <foo name="example">This is a modal</foo> -->
	<button @click="show()">My first modal</button>
	  <modal name="my-first-modal">
        This is my first modal
        <button @click="Showme()">Click</button>
    </modal>
  </div>
</template>

<script>
export default {

	methods: {
    showToast(){
      // this.$toasted.show('hello billo')
      // this.$toasted.global.my_app_error();
      // this.$toasted.global.my_app_error({
          // message : 'Not Authorized to Access'
          // myToast.text("Changing the text !!!").goAway(1500);
      // }).text(this.message).goAway(2500);
      // let myToast = this.$toasted.show("Holla !!");
        // myToast.text("Changing the text !!!").goAway(1500);
      },
    difDate(){
			var start = new Date("2020-08-02")
			var end = new Date("2020-08-03")
			var diff = end - start;
			var days = 1000 * 60 * 60 * 24;

			this.result = Math.floor(diff / days) + "days have passed"
    },
    myFunction(){
      // var startTime = moment("12:16:59 am", "hh:mm:ss a")
      this.hours = 20;
    },
		myDialog(){
			this.$modal.show('dialog', {
				
		  title: 'The standard Lorem Ipsum passage',
		  text: 'Lorem ipsum dolor sit amet, ...',
		  buttons: [
		    {
		      title: 'Cancel',
		      handler: () => {
		        this.$modal.hide('dialog')
		      }
		    },
		    {
		      title: 'Like',
		      handler: () => {
		        alert('Like action')
		      }
		    },
		    {
		      title: 'Repost',
		      handler: () => {
		        alert('Repost action')
		      }
		    }
		  ]
		})
		},

        show () {
            this.$modal.show('my-first-modal');
        },
        hide () {
            this.$modal.hide('my-first-modal');
        },
        Showme(){
        	alert("Jean-Paul Hamuli")
        },
    },
    mount () {
    	this.$modal.show('example')
        this.show()
        this.myDialog()
    },
  mounted(){
    this.difDate();
    this.myFunction();
  },
  data() {
        return{
          action : {
        text : 'Cancel',
        onClick : (e, toastObject) => {
            toastObject.goAway(0);
        }
    },
          icon : 'check',
          // icon : {
          //     name : 'watch',
          //     after : true // this will append the icon to the end of content
          // },
          message : "No Athentification",
          result : 0,
          hours : 0,
        	json_fields: {
            '': 'name',
            'City': 'city',
            'Telephone': 'phone.mobile',
            'Telephone 2' : {
                field: 'phone.landline',
                callback: (value) => {
                    return `Landline Phone - ${value}`;
                }
            },
        },
        json_data: [
            {
                'name': 'Tony Peña',
                'city': 'New York',
                'country': 'United States',
                'birthdate': '1978-03-15',
                'phone': {
                    'mobile': '1-541-754-3010',
                    'landline': '(541) 754-3010'
                }
            },
            {
                'name': 'Thessaloniki',
                'city': 'Athens',
                'country': 'Greece',
                'birthdate': '1987-11-23',
                'phone': {
                    'mobile': '+1 855 275 5071',
                    'landline': '(2741) 2621-244'
                }
            }
        ],
        json_meta: [
            [
                {
                    'key': 'charset',
                    'value': 'utf-8'
                }
            ]
        ],
        }
  },


};
</script>
