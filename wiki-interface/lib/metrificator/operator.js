/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const metricModel = require('../../lib/metrificator/model');
const bqHelper = require('../../lib/metrificator/bqhelper');

/* build and insert metric */
async function insertMetric(id, username, project, input_doc, document, model) {

    let myMetric = metricModel.metric;

    myMetric.id = id;
    myMetric.gitlab_user = username;
    myMetric.date = new Date().toISOString();
    myMetric.project = project;
    myMetric.input_doc = input_doc;
    myMetric.document = document;
    myMetric.model = model;

    await bqHelper.insertMetric(myMetric);

}

/* build and insert rating */
async function insertRating(id, rate) {

    let myRating = metricModel.rate;

    myRating.id = id;
    myRating.rate = rate;

    await bqHelper.insertRating(myRating);

}

module.exports.insertMetric = insertMetric;
module.exports.insertRating = insertRating;