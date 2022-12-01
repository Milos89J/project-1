export default {
  methods: {
    capitilizeFilter(word) {
      //this function is very important, he means that use first uppercase letter in string
      if (word && typeof word === "string") {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    },
  },
};
