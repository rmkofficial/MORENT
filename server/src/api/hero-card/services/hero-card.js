'use strict';

/**
 * hero-card service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hero-card.hero-card');
