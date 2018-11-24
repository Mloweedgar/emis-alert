define({ "api": [
  {
    "type": "delete",
    "url": "/alerts/:id",
    "title": "Delete Existing Alert",
    "version": "1.0.0",
    "name": "DeleteAlert",
    "group": "Alert",
    "description": "<p>Delete existing alert</p>",
    "filename": "lib/alert.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-alert.herokuapp.com/v1/alerts/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique alert identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>Human readable name of party(agency, authority etc) issuing(or generating) an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "number",
            "description": "<p>Human readable, system specific identifier of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>Human readable code denoting the appropriate handling of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Human readable code denoting the nature of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "scope",
            "description": "<p>Human readable code denoting the intended distribution of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "category",
            "description": "<p>Human readable code denoting the category of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event",
            "description": "<p>Human readable text denoting the subject of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "response",
            "description": "<p>Human readable code denoting the type of action recommended for the target audience as per instruction of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "urgency",
            "description": "<p>Human readable code denoting the urgency of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "severity",
            "description": "<p>Human readable code denoting the severity of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "certainty",
            "description": "<p>Human readable code denoting the certainty of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "headline",
            "description": "<p>A brief human-readable headline(title) of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>An extended human readable description of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "instruction",
            "description": "<p>Human readable text describing the recommended action to be taken by recipients of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "url",
            "description": "<p>A full, absolute URI for an HTML page or other text resource with additional or reference information regarding an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>Human readble text describing the affected area(s) of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Geometry",
            "optional": true,
            "field": "geometry",
            "description": "<p>The paired values of geo-points defining a geometry(i.e polygon, line etc) that delineates the affected area(s) of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Point",
            "optional": true,
            "field": "centroid",
            "description": "<p>The centre of affected area of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "reportedAt",
            "description": "<p>Date and time when an alert was issued(or generated) by sender(source, generator).</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "expectedAt",
            "description": "<p>The expected time of the beginning of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "expiredAt",
            "description": "<p>The expiry time of the information of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "direction",
            "defaultValue": "Inbound",
            "description": "<p>Human readable direction(received or given) of the alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) used to differentiate an alert visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when alert was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when alert was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"_id\": \"5be1df42842d9d5bf8556da8\",\n   \"sender\": \"Vandervort\",\n   \"number\": \"55DAEB99-14C5-4009-9A84-EBF01D96D89C\",\n   \"status\": \"Exercise\",\n   \"type\": \"Error\",\n   \"scope\": \"Public\",\n   \"category\": \"Fire\",\n   \"event\": \"Omnis et delectus id omnis quibusdam.\",\n   \"response\": \"AllClear\",\n   \"urgency\": \"Past\",\n   \"severity\": \"Severe\",\n   \"certainty\": \"Observed\",\n   \"headline\": \"Autem sint hic dolorem quasi aliquam amet beatae.\",\n   \"description\": \"Ut voluptate quo voluptatem ea asperiores.\",\n   \"instruction\": \"Et doloremque odit alias optio nihil temporibus soluta.\",\n   \"url\": \"https://loyce.org\",\n   \"area\": \"Avon\",\n   \"geometry\":\n   {\n       \"type\": \"Polygon\",\n       \"coordinates\": [\n           [\n               [34.0962460876592, -6.027472074582597],\n               [36.14211410064278, -7.73276252407186],\n               [34.26678374339001, -11.052568169309106],\n               [37.9984237359413, -19.518211005210446],\n               [34.81395505104936, -16.756448591687228],\n               [33.1875973147786, -19.028057614810873],\n               [33.19738425670787, -11.327556097253908],\n               [29.532252395715762, -9.526871069904153],\n               [27.14333524479317, -5.2808693952369214],\n               [33.662964128882464, -10.049782036387153],\n               [34.0962460876592, -6.027472074582597]\n           ]\n       ]\n   },\n   \"centroid\":\n   {\n       \"type\": \"Point\",\n       \"coordinates\": [39.14056019762375, -3.7587456547395846]\n   },\n   \"reportedAt\": \"2018-09-30T05:05:28.689Z\",\n   \"expectedAt\": \"2018-10-29T11:29:16.562Z\",\n   \"expiredAt\": \"2018-10-25T05:35:26.462Z\",\n   \"direction\": \"Outbound\",\n   \"color\": \"#FE9901\",\n   \"updatedAt\": \"2018-11-06T18:36:50.998Z\",\n   \"createdAt\": \"2018-11-06T18:36:50.998Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/alerts/:id",
    "title": "Get Existing Alert",
    "version": "1.0.0",
    "name": "GetAlert",
    "group": "Alert",
    "description": "<p>Get existing alert</p>",
    "filename": "lib/alert.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-alert.herokuapp.com/v1/alerts/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique alert identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>Human readable name of party(agency, authority etc) issuing(or generating) an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "number",
            "description": "<p>Human readable, system specific identifier of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>Human readable code denoting the appropriate handling of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Human readable code denoting the nature of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "scope",
            "description": "<p>Human readable code denoting the intended distribution of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "category",
            "description": "<p>Human readable code denoting the category of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event",
            "description": "<p>Human readable text denoting the subject of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "response",
            "description": "<p>Human readable code denoting the type of action recommended for the target audience as per instruction of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "urgency",
            "description": "<p>Human readable code denoting the urgency of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "severity",
            "description": "<p>Human readable code denoting the severity of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "certainty",
            "description": "<p>Human readable code denoting the certainty of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "headline",
            "description": "<p>A brief human-readable headline(title) of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>An extended human readable description of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "instruction",
            "description": "<p>Human readable text describing the recommended action to be taken by recipients of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "url",
            "description": "<p>A full, absolute URI for an HTML page or other text resource with additional or reference information regarding an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>Human readble text describing the affected area(s) of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Geometry",
            "optional": true,
            "field": "geometry",
            "description": "<p>The paired values of geo-points defining a geometry(i.e polygon, line etc) that delineates the affected area(s) of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Point",
            "optional": true,
            "field": "centroid",
            "description": "<p>The centre of affected area of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "reportedAt",
            "description": "<p>Date and time when an alert was issued(or generated) by sender(source, generator).</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "expectedAt",
            "description": "<p>The expected time of the beginning of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "expiredAt",
            "description": "<p>The expiry time of the information of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "direction",
            "defaultValue": "Inbound",
            "description": "<p>Human readable direction(received or given) of the alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) used to differentiate an alert visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when alert was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when alert was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"_id\": \"5be1df42842d9d5bf8556da8\",\n   \"sender\": \"Vandervort\",\n   \"number\": \"55DAEB99-14C5-4009-9A84-EBF01D96D89C\",\n   \"status\": \"Exercise\",\n   \"type\": \"Error\",\n   \"scope\": \"Public\",\n   \"category\": \"Fire\",\n   \"event\": \"Omnis et delectus id omnis quibusdam.\",\n   \"response\": \"AllClear\",\n   \"urgency\": \"Past\",\n   \"severity\": \"Severe\",\n   \"certainty\": \"Observed\",\n   \"headline\": \"Autem sint hic dolorem quasi aliquam amet beatae.\",\n   \"description\": \"Ut voluptate quo voluptatem ea asperiores.\",\n   \"instruction\": \"Et doloremque odit alias optio nihil temporibus soluta.\",\n   \"url\": \"https://loyce.org\",\n   \"area\": \"Avon\",\n   \"geometry\":\n   {\n       \"type\": \"Polygon\",\n       \"coordinates\": [\n           [\n               [34.0962460876592, -6.027472074582597],\n               [36.14211410064278, -7.73276252407186],\n               [34.26678374339001, -11.052568169309106],\n               [37.9984237359413, -19.518211005210446],\n               [34.81395505104936, -16.756448591687228],\n               [33.1875973147786, -19.028057614810873],\n               [33.19738425670787, -11.327556097253908],\n               [29.532252395715762, -9.526871069904153],\n               [27.14333524479317, -5.2808693952369214],\n               [33.662964128882464, -10.049782036387153],\n               [34.0962460876592, -6.027472074582597]\n           ]\n       ]\n   },\n   \"centroid\":\n   {\n       \"type\": \"Point\",\n       \"coordinates\": [39.14056019762375, -3.7587456547395846]\n   },\n   \"reportedAt\": \"2018-09-30T05:05:28.689Z\",\n   \"expectedAt\": \"2018-10-29T11:29:16.562Z\",\n   \"expiredAt\": \"2018-10-25T05:35:26.462Z\",\n   \"direction\": \"Outbound\",\n   \"color\": \"#FE9901\",\n   \"updatedAt\": \"2018-11-06T18:36:50.998Z\",\n   \"createdAt\": \"2018-11-06T18:36:50.998Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/alerts/schema",
    "title": "Get Alerts Schema",
    "version": "1.0.0",
    "name": "GetAlertSchema",
    "group": "Alert",
    "description": "<p>Returns alert json schema definition</p>",
    "filename": "lib/alert.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-alert.herokuapp.com/v1/alerts/schema"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/alerts",
    "title": "List Alerts",
    "version": "1.0.0",
    "name": "GetAlerts",
    "group": "Alert",
    "description": "<p>Returns a list of alerts</p>",
    "filename": "lib/alert.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-alert.herokuapp.com/v1/alerts"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>List of alerts</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": "<p>Unique alert identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.source",
            "description": "<p>Human readable name of party(agency, authority etc) issuing(or generating) an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.number",
            "description": "<p>Human readable, system specific identifier of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.status",
            "description": "<p>Human readable code denoting the appropriate handling of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.type",
            "description": "<p>Human readable code denoting the nature of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.scope",
            "description": "<p>Human readable code denoting the intended distribution of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.category",
            "description": "<p>Human readable code denoting the category of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.event",
            "description": "<p>Human readable text denoting the subject of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.response",
            "description": "<p>Human readable code denoting the type of action recommended for the target audience as per instruction of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "urgency",
            "description": "<p>Human readable code denoting the urgency of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.severity",
            "description": "<p>Human readable code denoting the severity of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.certainty",
            "description": "<p>Human readable code denoting the certainty of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.headline",
            "description": "<p>A brief human-readable headline(title) of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.description",
            "description": "<p>An extended human readable description of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.instruction",
            "description": "<p>Human readable text describing the recommended action to be taken by recipients of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.url",
            "description": "<p>A full, absolute URI for an HTML page or other text resource with additional or reference information regarding an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.area",
            "description": "<p>Human readble text describing the affected area(s) of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Geometry",
            "optional": true,
            "field": "data.geometry",
            "description": "<p>The paired values of geo-points defining a geometry(i.e polygon, line etc) that delineates the affected area(s) of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Point",
            "optional": true,
            "field": "data.centroid",
            "description": "<p>The centre of affected area of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "data.reportedAt",
            "description": "<p>Date and time when an alert was issued(or generated) by sender(source, generator).</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "data.expectedAt",
            "description": "<p>The expected time of the beginning of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "data.expiredAt",
            "description": "<p>The expiry time of the information of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.direction",
            "defaultValue": "Inbound",
            "description": "<p>Human readable direction(received or given) of the alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.color",
            "description": "<p>A color code(in hexadecimal format) used to differentiate an alert visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date when alert was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date when alert was last updated.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Total number of alert</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>Number of alert returned</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Query limit used</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Query skip/offset used</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page number</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Total number of pages</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "lastModified",
            "description": "<p>Date and time at which latest alert was last modified</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"data\": [\n   {\n       \"sender\": \"Vandervort\",\n       \"number\": \"55DAEB99-14C5-4009-9A84-EBF01D96D89C\",\n       \"status\": \"Exercise\",\n       \"type\": \"Error\",\n       \"scope\": \"Public\",\n       \"category\": \"Fire\",\n       \"event\": \"Omnis et delectus id omnis quibusdam.\",\n       \"response\": \"AllClear\",\n       \"urgency\": \"Past\",\n       \"severity\": \"Severe\",\n       \"certainty\": \"Observed\",\n       \"headline\": \"Autem sint hic dolorem quasi aliquam amet beatae.\",\n       \"description\": \"Ut voluptate quo voluptatem ea asperiores et.\",\n       \"instruction\": \"Et doloremque odit alias optio nihil temporibus.\",\n       \"url\": \"https://loyce.org\",\n       \"area\": \"Avon\",\n       \"geometry\":\n       {\n           \"type\": \"Polygon\",\n           \"coordinates\": [\n               [\n                   [34.0962460876592, -6.027472074582597],\n                   [36.14211410064278, -7.73276252407186],\n                   [34.26678374339001, -11.052568169309106],\n                   [37.9984237359413, -19.518211005210446],\n                   [34.81395505104936, -16.756448591687228],\n                   [33.1875973147786, -19.028057614810873],\n                   [33.19738425670787, -11.327556097253908],\n                   [29.532252395715762, -9.526871069904153],\n                   [27.14333524479317, -5.2808693952369214],\n                   [33.662964128882464, -10.049782036387153],\n                   [34.0962460876592, -6.027472074582597]\n               ]\n           ]\n       },\n       \"centroid\":\n       {\n           \"type\": \"Point\",\n           \"coordinates\": [39.14056019762375, -3.7587456547395846]\n       },\n       \"reportedAt\": \"2018-09-30T05:05:28.689Z\",\n       \"expectedAt\": \"2018-10-29T11:29:16.562Z\",\n       \"expiredAt\": \"2018-10-25T05:35:26.462Z\",\n       \"direction\": \"Outbound\",\n       \"color\": \"#FE9901\",\n       \"_id\": \"5be1df42842d9d5bf8556da8\",\n       \"updatedAt\": \"2018-11-06T18:36:50.998Z\",\n       \"createdAt\": \"2018-11-06T18:36:50.998Z\"\n   }],\n   \"total\": 32,\n   \"size\": 10,\n   \"limit\": 10,\n   \"skip\": 0,\n   \"page\": 1,\n   \"pages\": 32,\n   \"lastModified\": \"2018-11-06T18:36:50.999Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/alerts/:id",
    "title": "Patch Existing Alert",
    "version": "1.0.0",
    "name": "PatchAlert",
    "group": "Alert",
    "description": "<p>Patch existing alert</p>",
    "filename": "lib/alert.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-alert.herokuapp.com/v1/alerts/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique alert identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>Human readable name of party(agency, authority etc) issuing(or generating) an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "number",
            "description": "<p>Human readable, system specific identifier of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>Human readable code denoting the appropriate handling of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Human readable code denoting the nature of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "scope",
            "description": "<p>Human readable code denoting the intended distribution of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "category",
            "description": "<p>Human readable code denoting the category of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event",
            "description": "<p>Human readable text denoting the subject of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "response",
            "description": "<p>Human readable code denoting the type of action recommended for the target audience as per instruction of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "urgency",
            "description": "<p>Human readable code denoting the urgency of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "severity",
            "description": "<p>Human readable code denoting the severity of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "certainty",
            "description": "<p>Human readable code denoting the certainty of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "headline",
            "description": "<p>A brief human-readable headline(title) of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>An extended human readable description of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "instruction",
            "description": "<p>Human readable text describing the recommended action to be taken by recipients of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "url",
            "description": "<p>A full, absolute URI for an HTML page or other text resource with additional or reference information regarding an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>Human readble text describing the affected area(s) of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Geometry",
            "optional": true,
            "field": "geometry",
            "description": "<p>The paired values of geo-points defining a geometry(i.e polygon, line etc) that delineates the affected area(s) of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Point",
            "optional": true,
            "field": "centroid",
            "description": "<p>The centre of affected area of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "reportedAt",
            "description": "<p>Date and time when an alert was issued(or generated) by sender(source, generator).</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "expectedAt",
            "description": "<p>The expected time of the beginning of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "expiredAt",
            "description": "<p>The expiry time of the information of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "direction",
            "defaultValue": "Inbound",
            "description": "<p>Human readable direction(received or given) of the alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) used to differentiate an alert visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when alert was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when alert was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"_id\": \"5be1df42842d9d5bf8556da8\",\n   \"sender\": \"Vandervort\",\n   \"number\": \"55DAEB99-14C5-4009-9A84-EBF01D96D89C\",\n   \"status\": \"Exercise\",\n   \"type\": \"Error\",\n   \"scope\": \"Public\",\n   \"category\": \"Fire\",\n   \"event\": \"Omnis et delectus id omnis quibusdam.\",\n   \"response\": \"AllClear\",\n   \"urgency\": \"Past\",\n   \"severity\": \"Severe\",\n   \"certainty\": \"Observed\",\n   \"headline\": \"Autem sint hic dolorem quasi aliquam amet beatae.\",\n   \"description\": \"Ut voluptate quo voluptatem ea asperiores.\",\n   \"instruction\": \"Et doloremque odit alias optio nihil temporibus soluta.\",\n   \"url\": \"https://loyce.org\",\n   \"area\": \"Avon\",\n   \"geometry\":\n   {\n       \"type\": \"Polygon\",\n       \"coordinates\": [\n           [\n               [34.0962460876592, -6.027472074582597],\n               [36.14211410064278, -7.73276252407186],\n               [34.26678374339001, -11.052568169309106],\n               [37.9984237359413, -19.518211005210446],\n               [34.81395505104936, -16.756448591687228],\n               [33.1875973147786, -19.028057614810873],\n               [33.19738425670787, -11.327556097253908],\n               [29.532252395715762, -9.526871069904153],\n               [27.14333524479317, -5.2808693952369214],\n               [33.662964128882464, -10.049782036387153],\n               [34.0962460876592, -6.027472074582597]\n           ]\n       ]\n   },\n   \"centroid\":\n   {\n       \"type\": \"Point\",\n       \"coordinates\": [39.14056019762375, -3.7587456547395846]\n   },\n   \"reportedAt\": \"2018-09-30T05:05:28.689Z\",\n   \"expectedAt\": \"2018-10-29T11:29:16.562Z\",\n   \"expiredAt\": \"2018-10-25T05:35:26.462Z\",\n   \"direction\": \"Outbound\",\n   \"color\": \"#FE9901\",\n   \"updatedAt\": \"2018-11-06T18:36:50.998Z\",\n   \"createdAt\": \"2018-11-06T18:36:50.998Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/alerts",
    "title": "Create New Alert",
    "version": "1.0.0",
    "name": "PostAlert",
    "group": "Alert",
    "description": "<p>Create new alert</p>",
    "filename": "lib/alert.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-alert.herokuapp.com/v1/alerts"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique alert identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>Human readable name of party(agency, authority etc) issuing(or generating) an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "number",
            "description": "<p>Human readable, system specific identifier of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>Human readable code denoting the appropriate handling of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Human readable code denoting the nature of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "scope",
            "description": "<p>Human readable code denoting the intended distribution of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "category",
            "description": "<p>Human readable code denoting the category of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event",
            "description": "<p>Human readable text denoting the subject of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "response",
            "description": "<p>Human readable code denoting the type of action recommended for the target audience as per instruction of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "urgency",
            "description": "<p>Human readable code denoting the urgency of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "severity",
            "description": "<p>Human readable code denoting the severity of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "certainty",
            "description": "<p>Human readable code denoting the certainty of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "headline",
            "description": "<p>A brief human-readable headline(title) of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>An extended human readable description of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "instruction",
            "description": "<p>Human readable text describing the recommended action to be taken by recipients of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "url",
            "description": "<p>A full, absolute URI for an HTML page or other text resource with additional or reference information regarding an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>Human readble text describing the affected area(s) of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Geometry",
            "optional": true,
            "field": "geometry",
            "description": "<p>The paired values of geo-points defining a geometry(i.e polygon, line etc) that delineates the affected area(s) of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Point",
            "optional": true,
            "field": "centroid",
            "description": "<p>The centre of affected area of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "reportedAt",
            "description": "<p>Date and time when an alert was issued(or generated) by sender(source, generator).</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "expectedAt",
            "description": "<p>The expected time of the beginning of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "expiredAt",
            "description": "<p>The expiry time of the information of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "direction",
            "defaultValue": "Inbound",
            "description": "<p>Human readable direction(received or given) of the alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) used to differentiate an alert visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when alert was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when alert was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"_id\": \"5be1df42842d9d5bf8556da8\",\n   \"sender\": \"Vandervort\",\n   \"number\": \"55DAEB99-14C5-4009-9A84-EBF01D96D89C\",\n   \"status\": \"Exercise\",\n   \"type\": \"Error\",\n   \"scope\": \"Public\",\n   \"category\": \"Fire\",\n   \"event\": \"Omnis et delectus id omnis quibusdam.\",\n   \"response\": \"AllClear\",\n   \"urgency\": \"Past\",\n   \"severity\": \"Severe\",\n   \"certainty\": \"Observed\",\n   \"headline\": \"Autem sint hic dolorem quasi aliquam amet beatae.\",\n   \"description\": \"Ut voluptate quo voluptatem ea asperiores.\",\n   \"instruction\": \"Et doloremque odit alias optio nihil temporibus soluta.\",\n   \"url\": \"https://loyce.org\",\n   \"area\": \"Avon\",\n   \"geometry\":\n   {\n       \"type\": \"Polygon\",\n       \"coordinates\": [\n           [\n               [34.0962460876592, -6.027472074582597],\n               [36.14211410064278, -7.73276252407186],\n               [34.26678374339001, -11.052568169309106],\n               [37.9984237359413, -19.518211005210446],\n               [34.81395505104936, -16.756448591687228],\n               [33.1875973147786, -19.028057614810873],\n               [33.19738425670787, -11.327556097253908],\n               [29.532252395715762, -9.526871069904153],\n               [27.14333524479317, -5.2808693952369214],\n               [33.662964128882464, -10.049782036387153],\n               [34.0962460876592, -6.027472074582597]\n           ]\n       ]\n   },\n   \"centroid\":\n   {\n       \"type\": \"Point\",\n       \"coordinates\": [39.14056019762375, -3.7587456547395846]\n   },\n   \"reportedAt\": \"2018-09-30T05:05:28.689Z\",\n   \"expectedAt\": \"2018-10-29T11:29:16.562Z\",\n   \"expiredAt\": \"2018-10-25T05:35:26.462Z\",\n   \"direction\": \"Outbound\",\n   \"color\": \"#FE9901\",\n   \"updatedAt\": \"2018-11-06T18:36:50.998Z\",\n   \"createdAt\": \"2018-11-06T18:36:50.998Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/alerts/:id",
    "title": "Put Existing Alert",
    "version": "1.0.0",
    "name": "PutAlert",
    "group": "Alert",
    "description": "<p>Put existing alert</p>",
    "filename": "lib/alert.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-alert.herokuapp.com/v1/alerts/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique alert identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>Human readable name of party(agency, authority etc) issuing(or generating) an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "number",
            "description": "<p>Human readable, system specific identifier of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>Human readable code denoting the appropriate handling of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Human readable code denoting the nature of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "scope",
            "description": "<p>Human readable code denoting the intended distribution of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "category",
            "description": "<p>Human readable code denoting the category of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event",
            "description": "<p>Human readable text denoting the subject of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "response",
            "description": "<p>Human readable code denoting the type of action recommended for the target audience as per instruction of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "urgency",
            "description": "<p>Human readable code denoting the urgency of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "severity",
            "description": "<p>Human readable code denoting the severity of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "certainty",
            "description": "<p>Human readable code denoting the certainty of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "headline",
            "description": "<p>A brief human-readable headline(title) of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>An extended human readable description of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "instruction",
            "description": "<p>Human readable text describing the recommended action to be taken by recipients of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "url",
            "description": "<p>A full, absolute URI for an HTML page or other text resource with additional or reference information regarding an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>Human readble text describing the affected area(s) of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Geometry",
            "optional": true,
            "field": "geometry",
            "description": "<p>The paired values of geo-points defining a geometry(i.e polygon, line etc) that delineates the affected area(s) of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Point",
            "optional": true,
            "field": "centroid",
            "description": "<p>The centre of affected area of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "reportedAt",
            "description": "<p>Date and time when an alert was issued(or generated) by sender(source, generator).</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "expectedAt",
            "description": "<p>The expected time of the beginning of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "expiredAt",
            "description": "<p>The expiry time of the information of an alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "direction",
            "defaultValue": "Inbound",
            "description": "<p>Human readable direction(received or given) of the alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) used to differentiate an alert visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when alert was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when alert was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"_id\": \"5be1df42842d9d5bf8556da8\",\n   \"sender\": \"Vandervort\",\n   \"number\": \"55DAEB99-14C5-4009-9A84-EBF01D96D89C\",\n   \"status\": \"Exercise\",\n   \"type\": \"Error\",\n   \"scope\": \"Public\",\n   \"category\": \"Fire\",\n   \"event\": \"Omnis et delectus id omnis quibusdam.\",\n   \"response\": \"AllClear\",\n   \"urgency\": \"Past\",\n   \"severity\": \"Severe\",\n   \"certainty\": \"Observed\",\n   \"headline\": \"Autem sint hic dolorem quasi aliquam amet beatae.\",\n   \"description\": \"Ut voluptate quo voluptatem ea asperiores.\",\n   \"instruction\": \"Et doloremque odit alias optio nihil temporibus soluta.\",\n   \"url\": \"https://loyce.org\",\n   \"area\": \"Avon\",\n   \"geometry\":\n   {\n       \"type\": \"Polygon\",\n       \"coordinates\": [\n           [\n               [34.0962460876592, -6.027472074582597],\n               [36.14211410064278, -7.73276252407186],\n               [34.26678374339001, -11.052568169309106],\n               [37.9984237359413, -19.518211005210446],\n               [34.81395505104936, -16.756448591687228],\n               [33.1875973147786, -19.028057614810873],\n               [33.19738425670787, -11.327556097253908],\n               [29.532252395715762, -9.526871069904153],\n               [27.14333524479317, -5.2808693952369214],\n               [33.662964128882464, -10.049782036387153],\n               [34.0962460876592, -6.027472074582597]\n           ]\n       ]\n   },\n   \"centroid\":\n   {\n       \"type\": \"Point\",\n       \"coordinates\": [39.14056019762375, -3.7587456547395846]\n   },\n   \"reportedAt\": \"2018-09-30T05:05:28.689Z\",\n   \"expectedAt\": \"2018-10-29T11:29:16.562Z\",\n   \"expiredAt\": \"2018-10-25T05:35:26.462Z\",\n   \"direction\": \"Outbound\",\n   \"color\": \"#FE9901\",\n   \"updatedAt\": \"2018-11-06T18:36:50.998Z\",\n   \"createdAt\": \"2018-11-06T18:36:50.998Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>Human readable, system specific identifier of an alert.</p> <p>It consist of two letters to identify the disaster(or incident) type (e.g. EQ - earthquake); the year of the disaster; a six-digit, sequential disaster number; and the three-letter ISO code for country of occurrence e.g EQ-2001-000033-TZA.</p>",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "lib/alert.model.js",
    "group": "_home_lally_workspace_codetanzania_emis_alert_lib_alert_model_js",
    "groupTitle": "_home_lally_workspace_codetanzania_emis_alert_lib_alert_model_js",
    "name": ""
  }
] });
