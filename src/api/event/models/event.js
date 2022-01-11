const slugify = require('slugify');

module.exports = {
  /**
   * Triggered before user creation.
   */
  lifecycles: {
    async beforeCreate(data) {
      if (data.name) {
        data.slug = slugify(data.name, {lower: true});
      }
    },
    async beforeUpdate(params, data) {
      if (data.name) {
        data.slug = slugify(data.name, {lower: true});
      }
    },
  },
};

// const slugify = require('slugify');

// module.exports = {
//   lifecycles: {
//     beforeCreate: async (data) => {
//       if (data.name) {
//         data.slug = slugify(data.name, {lower: true});
//       }
//     },
//     beforeUpdate: async (params, data) => {
//       if (data.name) {
//         data.slug = slugify(data.name, {lower: true});
//       }
//     },
//   },
// };
