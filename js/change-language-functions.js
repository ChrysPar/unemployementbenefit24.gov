var languageContent = {
    greek: {
      languageBtn: "EL",
      mainTitle: " Επίδομα Μακροχρονίως Ανέργων",
      pageTitle: "Επίδομα Μακροχρονίως Ανέργων",
      infoTitle: "Πληροφορίες για την υποβολή αίτησης Επιδόματος Μακροχρονίως Ανέργων",
      subTitle1: "Αυτό το ερωτηματολόγιο μπορεί να σας βοηθήσει να βρείτε αν δικαιούστε να λάβετε το  επίδομα μακροχρονίως ανέργων.",
      subTitle2: "Στην συμπλήρωση του ερωτηματολογίου μπορεί να υπάρξει παρατεταμένη καθυστέρηση. Παρακαλούμε την κατανόηση σας.",
      subTitle3: "Δεν θα αποθηκεύσουμε ούτε θα μοιραστούμε τις απαντήσεις σας.",
      backButton: "Πίσω",
      nextQuestion: "Επόμενη ερώτηση",
      biggerCursor: "Μεγαλύτερος Δρομέας",
      bigFontSize: "Μεγάλο Κείμενο",
      readAloud: "Ανάγνωση",
      changeContrast: "Αντίθεση",
      readingMask: "Μάσκα Ανάγνωσης",
      startBtn:"Ας ξεκινήσουμε",
      chooseAnswer: "Επιλέξτε την απάντησή σας",
      oneAnswer: "Μπορείτε να επιλέξετε μόνο μία επιλογή.",
      errorAn: "Λάθος:",
      choose: "Πρέπει να επιλέξετε μια απάντηση",
    },
    english: {
      languageBtn: "EN",
      mainTitle: "Long-term Unemployment Benefit",
      pageTitle: "Long-term Unemployment Benefit",
      infoTitle: "Information on the issue of Long-term Unemployment Benefit",
      subTitle1: "This questionnaire can help you determine if you are eligible to receive the long-term unemployment benefit.",
      subTitle2: "There may be a prolonged delay in completing the questionnaire. We kindly ask for your understanding.",
      subTitle3: "We will neither store nor share your answers.",
      backButton: "Βack",
      nextQuestion: "Next Question",
      biggerCursor: "Bigger Cursor",
      bigFontSize:" Big Font Size",
      readAloud: "Read Aloud",
      changeContrast:" Change Contrast",
      readingMask:" Reading Mask",

      startBtn:"Let's start",
      chooseAnswer: "Choose your answer",
      oneAnswer: "You can choose only one option.",
      errorAn: "Error:",
      choose: "You must choose one option",
    }
};
  
// Retrieve the selected language from localStorage or set default to "greek"
var currentLanguage = localStorage.getItem("preferredLanguage") || "greek";

function toggleLanguage() {
    currentLanguage = currentLanguage === "greek" ? "english" : "greek";
    localStorage.setItem("preferredLanguage", currentLanguage);
    updateContent();
}
function updateContent() {
    var components = document.querySelectorAll(".language-component"); 
    components.forEach(function (component) {
        var componentName = component.dataset.component;
        component.textContent = languageContent[currentLanguage][componentName];
    });
}
// Initialize the content based on the selected language
updateContent();
