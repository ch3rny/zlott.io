<template>
  <v-app>
    <v-layout pa-4 column class="job__form">
      <p class="title">Edit Existing Job</p>
      <form action>
        <v-card class="elevation-0 section pa-4">
          <v-layout wrap>
            <v-flex xs4 class="job__label pr-4">
              Title*
              <br>
              <span>(Ex.: Senior Software Developer)</span>
            </v-flex>
            <v-flex xs8 mb-4>
              <v-text-field
                v-model="job.title"
                label="Enter job title"
                single-line
                v-validate="'required|max:250'"
                :counter="250"
                :error-messages="errors.collect('title')"
                data-vv-name="title"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs4 class="job__label role pr-4">Job Role*</v-flex>
            <v-flex xs8 mb-4>
              <v-layout wrap>
                <v-flex xs12 sm6 v-for="(item, index) in jobRole" :key="index">
                  <v-checkbox
                    :label="item"
                    color="#419bf9"
                    :value="item"
                    v-show="index<=showIndex"
                    v-model="job.role"
                    hide-details
                  ></v-checkbox>
                </v-flex>
              </v-layout>
              <v-flex xs12 sm6>
                <more-less-button
                  :itemsLength="jobRole.length"
                  :showItems="6"
                  @clicked="onClickChild"
                />
              </v-flex>
            </v-flex>
            <v-flex xs4 class="job__label pr-4">Key Skills</v-flex>
            <v-flex xs8 mb-4>
              <v-autocomplete
                v-model="job.keySkills"
                :items="keySkills"
                single-line
                chips
                deletable-chips
                color="#419bf9"
                label="Select key skills "
                multiple
              />
            </v-flex>
            <v-flex xs4 class="job__label pr-4">Years of Work Expirience*</v-flex>
            <v-flex xs8>
              <v-range-slider
                v-model="job.expirience"
                :max="20"
                :min="0"
                :step="1"
                :thumb-size="24"
                thumb-label="always"
                color="#65c178"
              ></v-range-slider>
            </v-flex>
            <v-flex xs4 class="job__label pr-4">Location*</v-flex>
            <v-flex xs8 mb-4>
              <v-autocomplete
                v-model="job.location"
                :items="city_names"
                single-line
                multiple
                chips
                deletable-chips
                color="#419bf9"
                label="Type and select location"
              />
            </v-flex>
          </v-layout>
        </v-card>
      </form>
      <v-btn @click="saveJob()" depressed outline color="#82d8b6" class="generate__button">Save</v-btn>
    </v-layout>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import api from "@/api";
import MoreLessButton from "@/components/MoreLessButton.vue";
export default {
  name: "JobEdit",
  components: {
    MoreLessButton
  },
  data() {
    return {
      showIndex: 6,
      job: {
        title: "",
        role: [],
        keySkills: [],
        expirience: [3, 7],
        location: []
      },
      jobRole: [
        "System Engineer",
        "DevOps",
        "iOs Developer",
        "Android Developer",
        "Mobile Developer",
        "Full Stack Developer",
        "QA Engineer",
        "Team Leader",
        "Project Manager",
        "Cloud Services Developer",
        "Network Administrator",
        "Senior System Administrator",
        "Data Quality Manager",
        "Security Specialist",
        "Junior Software Engineer",
        "Front End Developer",
        "System Architect"
      ],
      keySkills: [
        "Communication",
        "Ability to Work Under Pressure",
        "Decision Making",
        "Time Management",
        "Self-motivation",
        "Conflict Resolution",
        "Leadership",
        "Adaptability",
        "Teamwork",
        "Creativity"
      ],
      city_names: [
        "Aberdeen",
        "Abilene",
        "Akron",
        "Albany",
        "Albuquerque",
        "Alexandria",
        "Allentown",
        "Amarillo",
        "Anaheim",
        "Anchorage",
        "Ann Arbor",
        "Antioch",
        "Apple Valley",
        "Appleton",
        "Arlington",
        "Arvada",
        "Asheville",
        "Athens",
        "Atlanta",
        "Atlantic City",
        "Augusta",
        "Aurora",
        "Austin",
        "Bakersfield",
        "Baltimore",
        "Barnstable",
        "Baton Rouge",
        "Beaumont",
        "Bel Air",
        "Bellevue",
        "Berkeley",
        "Bethlehem",
        "Billings",
        "Birmingham",
        "Bloomington",
        "Boise",
        "Boise City",
        "Bonita Springs",
        "Boston",
        "Boulder",
        "Bradenton",
        "Bremerton",
        "Bridgeport",
        "Brighton",
        "Brownsville",
        "Bryan",
        "Buffalo",
        "Burbank",
        "Burlington",
        "Cambridge",
        "Canton",
        "Cape Coral",
        "Carrollton",
        "Cary",
        "Cathedral City",
        "Cedar Rapids",
        "Champaign",
        "Chandler",
        "Charleston",
        "Charlotte",
        "Chattanooga",
        "Chesapeake",
        "Chicago",
        "Chula Vista",
        "Cincinnati",
        "Clarke County",
        "Clarksville",
        "Clearwater",
        "Cleveland",
        "College Station",
        "Colorado Springs",
        "Columbia",
        "Columbus",
        "Concord",
        "Coral Springs",
        "Corona",
        "Corpus Christi",
        "Costa Mesa",
        "Dallas",
        "Daly City",
        "Danbury",
        "Davenport",
        "Davidson County",
        "Dayton",
        "Daytona Beach",
        "Deltona",
        "Denton",
        "Denver",
        "Des Moines",
        "Detroit",
        "Downey",
        "Duluth",
        "Durham",
        "El Monte",
        "El Paso",
        "Elizabeth",
        "Elk Grove",
        "Elkhart",
        "Erie",
        "Escondido",
        "Eugene",
        "Evansville",
        "Fairfield",
        "Fargo",
        "Fayetteville",
        "Fitchburg",
        "Flint",
        "Fontana",
        "Fort Collins",
        "Fort Lauderdale",
        "Fort Smith",
        "Fort Walton Beach",
        "Fort Wayne",
        "Fort Worth",
        "Frederick",
        "Fremont",
        "Fresno",
        "Fullerton",
        "Gainesville",
        "Garden Grove",
        "Garland",
        "Gastonia",
        "Gilbert",
        "Glendale",
        "Grand Prairie",
        "Grand Rapids",
        "Grayslake",
        "Green Bay",
        "GreenBay",
        "Greensboro",
        "Greenville",
        "Gulfport-Biloxi",
        "Hagerstown",
        "Hampton",
        "Harlingen",
        "Harrisburg",
        "Hartford",
        "Havre de Grace",
        "Hayward",
        "Hemet",
        "Henderson",
        "Hesperia",
        "Hialeah",
        "Hickory",
        "High Point",
        "Hollywood",
        "Honolulu",
        "Houma",
        "Houston",
        "Howell",
        "Huntington",
        "Huntington Beach",
        "Huntsville",
        "Independence",
        "Indianapolis",
        "Inglewood",
        "Irvine",
        "Irving",
        "Jackson",
        "Jacksonville",
        "Jefferson",
        "Jersey City",
        "Johnson City",
        "Joliet",
        "Kailua",
        "Kalamazoo",
        "Kaneohe",
        "Kansas City",
        "Kennewick",
        "Kenosha",
        "Killeen",
        "Kissimmee",
        "Knoxville",
        "Lacey",
        "Lafayette",
        "Lake Charles",
        "Lakeland",
        "Lakewood",
        "Lancaster",
        "Lansing",
        "Laredo",
        "Las Cruces",
        "Las Vegas",
        "Layton",
        "Leominster",
        "Lewisville",
        "Lexington",
        "Lincoln",
        "Little Rock",
        "Long Beach",
        "Lorain",
        "Los Angeles",
        "Louisville",
        "Lowell",
        "Lubbock",
        "Macon",
        "Madison",
        "Manchester",
        "Marina",
        "Marysville",
        "McAllen",
        "McHenry",
        "Medford",
        "Melbourne",
        "Memphis",
        "Merced",
        "Mesa",
        "Mesquite",
        "Miami",
        "Milwaukee",
        "Minneapolis",
        "Miramar",
        "Mission Viejo",
        "Mobile",
        "Modesto",
        "Monroe",
        "Monterey",
        "Montgomery",
        "Moreno Valley",
        "Murfreesboro",
        "Murrieta",
        "Muskegon",
        "Myrtle Beach",
        "Naperville",
        "Naples",
        "Nashua",
        "Nashville",
        "New Bedford",
        "New Haven",
        "New London",
        "New Orleans",
        "New York",
        "New York City",
        "Newark",
        "Newburgh",
        "Newport News",
        "Norfolk",
        "Normal",
        "Norman",
        "North Charleston",
        "North Las Vegas",
        "North Port",
        "Norwalk",
        "Norwich",
        "Oakland",
        "Ocala",
        "Oceanside",
        "Odessa",
        "Ogden",
        "Oklahoma City",
        "Olathe",
        "Olympia",
        "Omaha",
        "Ontario",
        "Orange",
        "Orem",
        "Orlando",
        "Overland Park",
        "Oxnard",
        "Palm Bay",
        "Palm Springs",
        "Palmdale",
        "Panama City",
        "Pasadena",
        "Paterson",
        "Pembroke Pines",
        "Pensacola",
        "Peoria",
        "Philadelphia",
        "Phoenix",
        "Pittsburgh",
        "Plano",
        "Pomona",
        "Pompano Beach",
        "Port Arthur",
        "Port Orange",
        "Port Saint Lucie",
        "Port St. Lucie",
        "Portland",
        "Portsmouth",
        "Poughkeepsie",
        "Providence",
        "Provo",
        "Pueblo",
        "Punta Gorda",
        "Racine",
        "Raleigh",
        "Rancho Cucamonga",
        "Reading",
        "Redding",
        "Reno",
        "Richland",
        "Richmond",
        "Richmond County",
        "Riverside",
        "Roanoke",
        "Rochester",
        "Rockford",
        "Roseville",
        "Round Lake Beach",
        "Sacramento",
        "Saginaw",
        "Saint Louis",
        "Saint Paul",
        "Saint Petersburg",
        "Salem",
        "Salinas",
        "Salt Lake City",
        "San Antonio",
        "San Bernardino",
        "San Buenaventura",
        "San Diego",
        "San Francisco",
        "San Jose",
        "Santa Ana",
        "Santa Barbara",
        "Santa Clara",
        "Santa Clarita",
        "Santa Cruz",
        "Santa Maria",
        "Santa Rosa",
        "Sarasota",
        "Savannah",
        "Scottsdale",
        "Scranton",
        "Seaside",
        "Seattle",
        "Sebastian",
        "Shreveport",
        "Simi Valley",
        "Sioux City",
        "Sioux Falls",
        "South Bend",
        "South Lyon",
        "Spartanburg",
        "Spokane",
        "Springdale",
        "Springfield",
        "St. Louis",
        "St. Paul",
        "St. Petersburg",
        "Stamford",
        "Sterling Heights",
        "Stockton",
        "Sunnyvale",
        "Syracuse",
        "Tacoma",
        "Tallahassee",
        "Tampa",
        "Temecula",
        "Tempe",
        "Thornton",
        "Thousand Oaks",
        "Toledo",
        "Topeka",
        "Torrance",
        "Trenton",
        "Tucson",
        "Tulsa",
        "Tuscaloosa",
        "Tyler",
        "Utica",
        "Vallejo",
        "Vancouver",
        "Vero Beach",
        "Victorville",
        "Virginia Beach",
        "Visalia",
        "Waco",
        "Warren",
        "Washington",
        "Waterbury",
        "Waterloo",
        "West Covina",
        "West Valley City",
        "Westminster",
        "Wichita",
        "Wilmington",
        "Winston",
        "Winter Haven",
        "Worcester",
        "Yakima",
        "Yonkers",
        "York",
        "Youngstown"
      ]
    };
  },
  computed: {
    jobRoleLength() {
      return this.job.role.length;
    },
    locationLength() {
      return this.job.location.length;
    },
    ...mapGetters("auth", ["user"])
  },
  methods: {
    onClickChild(value) {
      this.showIndex = value;
    },
    saveJob() {
      const payload = {
        data: {
          role: this.job.role,
          key_skills: this.job.keySkills,
          expirience: this.job.expirience,
          location: this.job.location
        },
        title: this.job.title,
        years_work_experience: this.job.expirience[0],
        owner: this.user.id
      };
      api.job
        .patchJob(this.$route.params.id, payload)
        .then(this.$router.push({ name: "job" }));
    }
  },
  mounted() {
    api.job.getJob(this.$route.params.id).then(res => {
      let data = {
        title: res.data.title,
        role: res.data.data.role,
        keySkills: res.data.data.keySkills,
        expirience: res.data.data.expirience,
        location: res.data.data.location
      };
      this.job = data;
    });
  }
};
</script>

<style lang="scss" scoped>
.job__form {
  max-width: $max-width;
}
.job__label {
  color: #999;
  text-align: right;
  margin: auto;
  font-size: 16px;
}
.job__more {
  color: $zlott-blue-color;
  margin-top: 10px;
  cursor: pointer;
}
.role {
  margin-top: 20px;
}
.v-card {
  border: 1px #e4e5e6 solid;
  border-radius: 5px;
}
.generate__button {
  border-width: 2px;
  border-radius: 5px;
  margin: 30px auto;
  width: 300px;
  text-transform: none;
  &::before {
    background-color: #fff;
    opacity: 1;
  }
}
</style>