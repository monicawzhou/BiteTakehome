const axios = require("axios");
const Section = require("../models/Section");
const Item = require("../models/Item");
const ModGroup = require("../models/ModGroup");
const Mod = require("../models/Mod");
const Discount = require("../models/Discount");
const OrderType = require("../models/OrderType");
const logger = require("../utils/logger");

const POS_API_URL = "https://bite-test-pos-production.herokuapp.com";

async function syncMenu(locationId) {
  try {
    const response = await axios.get(
      `${POS_API_URL}/locations/${locationId}/menu`
    );
    const { sections, items, modGroups, mods, discounts, orderTypes } =
      response.data;
    console.log(sections);

    await Section.insertMany(sections);

    await Item.insertMany(items);

    await ModGroup.insertMany(modGroups);

    await Mod.insertMany(mods);

    await Discount.insertMany(discounts);

    await OrderType.insertMany(orderTypes);

    logger.info("Menu sync completed successfully");
  } catch (error) {
    logger.error("Error syncing menu:", error);
  }
}

module.exports = { syncMenu };
