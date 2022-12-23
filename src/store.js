
import { reactive } from 'vue'

export const store = reactive({
    a1: [
        {
            text: "Home",
            active: true
        },
        {
            text: "Who We Are",
            active: false
        },
        {
            text: "What We Do",
            active: false
        },
        {
            text: "Where We Work",
            active: false
        },
        {
            text: "Careers",
            active: false
        },
        {
            text: "News",
            active: false
        },
        {
            text: "Contact",
            active: false
        }

    ],
    b1: "Avanda & Associates legal team announce deal to open up oil & gas",
    b3: [
        {
            titolo: "WHO WE ARE",
            text: "Nullam fringilla tristique elit id varius. Nulla lacinia quam nec venenatis dignissim. Vivamus volutpat tempus semper. Cras feugiat mi sit amet risus consectetur."
        },
        {
            titolo: "WHAT WE DO",
            text: "Nullam fringilla tristique elit id varius. Nulla lacinia quam nec venenatis dignissim. Vivamus volutpat tempus semper. Cras feugiat mi sit amet risus consectetur."
        },
        {
            titolo: "WHERE WE WORK",
            text: "Nullam fringilla tristique elit id varius. Nulla lacinia quam nec venenatis dignissim. Vivamus volutpat tempus semper. Cras feugiat mi sit amet risus consectetur."
        }
    ],
    b4: [
        {
            titolo: "A GLOBAL VIEW",
            text: "Nullam fringilla tristique elit id varius. Lorem lacinia quam nec venenatis dignissim."
        },
        {
            titolo: "EXPERT LAWYERS",
            text: "Nullam fringilla tristique elit id varius. Lorem lacinia quam nec venenatis dignissim."
        },
        {
            titolo: "CLIENT FOCUS",
            text: "Nullam fringilla tristique elit id varius. Lorem lacinia quam nec venenatis dignissim."
        },
        {
            titolo: "LOCAL KNOWLEDGE",
            text: "Nullam fringilla tristique elit id varius. Lorem lacinia quam nec venenatis dignissim."
        }
    ],
    b6: [
        {
            titolo: "OUR PEOPLE",
            stuff: [
                "Deborah Brown",
                "Allen Lucas",
                "Muriel Potter",
                "Ken Douglas",
                "Loretta Harris",
                "Phil Russel"
            ]
        },
        {
            titolo: "OUR PRACTICE AREAS",
            stuff: [
                "Tax Litigation",
                "Aquisitions",
                "Financial Advice",
                "International",
                "Oil and Gas",
                "Capital Markets"
            ]
        },
        {
            titolo: "OUR PUBLICATIONS",
            stuff: [
                "Low Oil Prices",
                "Cost of Divorce",
                "2015 Tax Laws",
                "Surveys Matter",
                "In-House Work",
                "Obama Care"
            ]
        }


    ],
    b8: [
        {
            titolo: "INTERNATIONAL",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia doloribus mollitia pariatur accusamus excepturi in neque suscipit."
        },
        {
            titolo: "PARTNERSHIPS",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia doloribus mollitia pariatur accusamus excepturi in neque suscipit."
        },
        {
            titolo: "EXCELLENCE",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia doloribus mollitia pariatur accusamus excepturi in neque suscipit."
        }
    ]

});
