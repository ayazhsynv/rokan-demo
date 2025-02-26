'use strict';

/**
 * herocard service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::herocard.herocard');
