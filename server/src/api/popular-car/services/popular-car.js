'use strict';

/**
 * popular-car service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::popular-car.popular-car');
