
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
    ]

});
