'use strict';

/**
 * recommended-car service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::recommended-car.recommended-car');
