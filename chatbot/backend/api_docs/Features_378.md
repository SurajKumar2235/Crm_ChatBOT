
# Features API

The Features API allows you to fetch information about the features in your org, and its limits. These limits may vary depending on your org's edition.

#### Purpose

To retrieve details of features and its limits for your current org.

#### Endpoints

[GET/\_\_features](https://www.zoho.com/crm/developer/docs/api/v7/get-features.html)

[GET/\_\_features?module={module\_api\_name}](https://www.zoho.com/crm/developer/docs/api/v7/get-features.html)

[GET/\_\_features?api\_names={feature\_api\_name\_1},{feature\_api\_name\_2}](https://www.zoho.com/crm/developer/docs/api/v7/get-features.html)

[GET/\_\_features/{feature\_api\_name}](https://www.zoho.com/crm/developer/docs/api/v7/get-features.html)

### Request Details

#### Request URLs

- **To retrieve all the available features and their corresponding limits:**

{api-domain}/crm/{version}/\_\_features

- **To retrieve a specific feature:**

{api-domain}/crm/{version}/\_\_features?api\_names={feature\_api\_name\_1},{feature\_api\_name\_2}

- **To retrieve all the features specific to a module:**

{api-domain}/crm/{version}/\_\_features?module={module\_api\_name}

- **To retrieve detailed information of a specific feature and its sub-features:**

{api-domain}/crm/{version}/\_\_features/{feature\_api\_name}


#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.features.READ

#### Parameters

- modulestring, optional



To retrieve all available features and their limits for a particular module, specify the [module API name](https://www.zoho.com/crm/developer/docs/api/v7/modules-api.html) of the module.

- api\_namesstring, optional



Specify the feature api name to retrieve the details and limits specific to that feature. To retrieve details of more than one feature, give the feature api names in comma seperated format.

- pageinteger, optional



To get the list of features from the respective pages. Default value for page is **1**.

**Possible values:** Positive Integer values only.

- per\_pageinteger, optional



To get the list of features available per page. The default and the maximum possible value is **200**.

**Possible values:** Positive Integer values only.

- page\_tokenstring, mandatory to fetch more than 2000 services by pagination



You can use the **page** param to fetch up to 2000 features without **page\_token**. To fetch more than 2000 features, you must include the **page\_token** param in the request. This param takes the value from the key **next\_page\_token** in the response of the first GET features call. This token value is user-specific and if you use another user's token, the system will throw an error.

The page token is bound to parameters and expires in 24 hours. Also, you cannot use this param with the **page** param.


#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/__features"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

``` deluge
Copiedresponse = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/__features"\
	type: GET\
	connection:"crm_oauth_connection"\
];
info response;
```

#### Response JSON Keys

- componentsJSON Array



Represents the details of components of a feature.



  - api\_namestring



    Represents the api name of the feature.

  - module\_supportedboolean



    It represents whether the feature is specific to a module.

  - detailsJSON object



    Contains the details regarding the limits for the feature.



    - limitsJSON object



      It represents the limits related to the feature.



      - edition\_limitsinteger



        It represents the a maximum count of the feature allocated for the current edition.

      - totalinteger



        It represents the actual count of the feature allocated to the current org.
- feature\_labelstring



It represents the feature name in UI. This will be translated to a user's language.

- parent\_featurestring



It represents the parent feature of the corresponding feature if applicable.


#### Possible Errors

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL.

Specify a valid request method. Refer to the endpoints section above.

- INVALID\_MODULEHTTP 400



The module name given seems to be invalid

**Resolution:** You have specified an invalid module name.

Specify a valid module name.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have **ZohoCRM.features.READ** scope.

Generate a new token with valid scope. Refer to scope section above for more details.

- AUTHENTICATION\_FAILUREHTTP 401



Authentication failed

**Resolution:** Pass the access token in the request header of the API call.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to the request URL section above.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in the server. Contact support team.


#### Sample Response

``` json
Copied{
    "__features": [\
        {\
            "components": [\
                {\
                    "api_name": "global_picklist_per_module",\
                    "module_supported": false,\
                    "details": {\
                        "limits": {\
                            "edition_limit": 7,\
                            "total": 7\
                        }\
                    },\
                    "feature_label": "Global Picklist Per Module"\
                },\
                {\
                    "api_name": "association_per_global_field",\
                    "module_supported": false,\
                    "details": {\
                        "limits": {\
                            "edition_limit": 15,\
                            "total": 15\
                        }\
                    },\
                    "feature_label": "Association Per Global Set"\
                },\
                {\
                    "api_name": "used_option_count",\
                    "module_supported": false,\
                    "details": {\
                        "limits": {\
                            "edition_limit": 1000,\
                            "total": 1000\
                        }\
                    },\
                    "feature_label": "Used Option Count"\
                },\
                {\
                    "api_name": "inc_used_option_count",\
                    "module_supported": false,\
                    "details": null,\
                    "feature_label": "Increased Used Option Count"\
                },\
                {\
                    "api_name": "unused_option_count",\
                    "module_supported": false,\
                    "details": {\
                        "limits": {\
                            "edition_limit": 500,\
                            "total": 500\
                        }\
                    },\
                    "feature_label": "Unused Option Count"\
                },\
                {\
                    "api_name": "large_global_set",\
                    "module_supported": false,\
                    "details": null,\
                    "feature_label": "Large Global Set"\
                }\
            ],\
            "api_name": "global_picklists",\
            "parent_feature": null,\
            "module_supported": false,\
            "details": {\
                "limits": {\
                    "edition_limit": 10,\
                    "total": 10\
                }\
            },\
            "feature_label": "Global Picklists"\
        },\
        {\
            "components": null,\
            "api_name": "team_spaces",\
            "parent_feature": null,\
            "module_supported": false,\
            "details": {\
                "limits": {\
                    "edition_limit": 25,\
                    "total": 25\
                }\
            },\
            "feature_label": "Teamspace"\
        },\
        {\
            "components": null,\
            "api_name": "Lookup_Filter",\
            "parent_feature": null,\
            "module_supported": false,\
            "details": {\
                "limits": {\
                    "edition_limit": 5,\
                    "total": 5\
                }\
            },\
            "feature_label": null\
        },\
        {\
            "components": null,\
            "api_name": null,\
            "parent_feature": null,\
            "module_supported": false,\
            "details": null,\
            "feature_label": null\
        },\
        {\
            "components": null,\
            "api_name": "domain_mappings",\
            "parent_feature": null,\
            "module_supported": false,\
            "details": null,\
            "feature_label": "domain_mapping"\
        },\
        {\
            "components": [\
                {\
                    "api_name": "excluded_fields",\
                    "module_supported": false,\
                    "details": {\
                        "limits": {\
                            "edition_limit": 15,\
                            "total": 15\
                        }\
                    },\
                    "feature_label": "Excluded Fields"\
                },\
                {\
                    "api_name": "locking_rules",\
                    "module_supported": false,\
                    "details": {\
                        "limits": {\
                            "edition_limit": 5,\
                            "total": 5\
                        }\
                    },\
                    "feature_label": "Locking Rules"\
                },\
                {\
                    "api_name": "restricted_custom_buttons",\
                    "module_supported": false,\
                    "details": {\
                        "limits": {\
                            "edition_limit": 30,\
                            "total": 30\
                        }\
                    },\
                    "feature_label": "Restricted Custom Buttons"\
                },\
                {\
                    "api_name": "excluded_profiles",\
                    "module_supported": false,\
                    "details": {\
                        "limits": {\
                            "edition_limit": 15,\
                            "total": 15\
                        }\
                    },\
                    "feature_label": "Excluded Profiles"\
                }\
            ],\
            "api_name": "record_locking_configurations",\
            "parent_feature": null,\
            "module_supported": true,\
            "details": null,\
            "feature_label": "Locking Configuration"\
        },\
        {\
            "components": null,\
            "api_name": "field_level_security",\
            "parent_feature": null,\
            "module_supported": false,\
            "details": null,\
            "feature_label": "Field Level Security"\
        },\
        {\
            "components": null,\
            "api_name": "groups",\
            "parent_feature": null,\
            "module_supported": false,\
            "details": {\
                "limits": {\
                    "edition_limit": 50,\
                    "total": 50\
                }\
            },\
            "feature_label": "Groups"\
        },\
        {\
            "components": null,\
            "api_name": "data_sharing",\
            "parent_feature": null,\
            "module_supported": true,\
            "details": null,\
            "feature_label": "Data Sharing"\
        },\
        {\
            "components": null,\
            "api_name": "data_sharing_rules",\
            "parent_feature": {\
                "api_name": "data_sharing"\
            },\
            "module_supported": true,\
            "details": {\
                "limits": {\
                    "edition_limit": 25,\
                    "total": 25\
                }\
            },\
            "feature_label": "Data Sharing Rules"\
        },\
        {\
            "components": null,\
            "api_name": "data_sharing_rules",\
            "parent_feature": {\
                "api_name": "data_sharing"\
            },\
            "module_supported": false,\
            "details": {\
                "limits": {\
                    "edition_limit": 10,\
                    "total": 10\
                }\
            },\
            "feature_label": "Data_Sharing_Rules_Criteria"\
        },\
        {\
            "components": null,\
            "api_name": "record_level_sharing",\
            "parent_feature": null,\
            "module_supported": true,\
            "details": null,\
            "feature_label": "Record level sharing"\
        },\
        {\
            "components": null,\
            "api_name": "record_level_sharing",\
            "parent_feature": {\
                "api_name": "record_level_sharing"\
            },\
            "module_supported": false,\
            "details": {\
                "limits": {\
                    "edition_limit": 10,\
                    "total": 10\
                }\
            },\
            "feature_label": "Record level sharing"\
        },\
        {\
            "components": null,\
            "api_name": "personal_health_fields",\
            "parent_feature": null,\
            "module_supported": true,\
            "details": {\
                "used_count": {\
                    "total": 0\
                },\
                "limits": {\
                    "edition_limit": 30,\
                    "total": 30\
                }\
            },\
            "feature_label": "Personal Health Fields"\
        },\
        {\
            "components": null,\
            "api_name": "webform_fields_limit",\
            "parent_feature": {\
                "api_name": "web_forms"\
            },\
            "module_supported": false,\
            "details": {\
                "limits": {\
                    "edition_limit": 50,\
                    "total": 50\
                }\
            },\
            "feature_label": "Webform Fields Limit"\
        },\
        {\
            "components": null,\
            "api_name": "webform_abtesting",\
            "parent_feature": {\
                "api_name": "web_forms"\
            },\
            "module_supported": false,\
            "details": {\
                "limits": {\
                    "edition_limit": 2,\
                    "total": 2\
                }\
            },\
            "feature_label": "Webform ABTesting"\
        },\
        {\
            "components": null,\
            "api_name": "webform_suggestions",\
            "parent_feature": {\
                "api_name": "web_forms"\
            },\
            "module_supported": false,\
            "details": null,\
            "feature_label": "Webform Suggestions"\
        },\
        {\
            "components": null,\
            "api_name": "unsubscribe",\
            "parent_feature": {\
                "api_name": "web_forms"\
            },\
            "module_supported": false,\
            "details": {\
                "limits": {\
                    "edition_limit": 10,\
                    "total": 10\
                }\
            },\
            "feature_label": "Unsubscribe"\
        },\
        {\
            "components": null,\
            "api_name": "auto_response_rules",\
            "parent_feature": {\
                "api_name": "web_forms"\
            },\
            "module_supported": true,\
            "details": null,\
            "feature_label": "AutoResponse Rules"\
        },\
        {\
            "components": null,\
            "api_name": "scheduled_mass_email",\
            "parent_feature": null,\
            "module_supported": false,\
            "details": null,\
            "feature_label": "Scheduled Mass Email"\
        },\
        {\
            "components": null,\
            "api_name": "inventory_templates",\
            "parent_feature": null,\
            "module_supported": true,\
            "details": null,\
            "feature_label": "Inventory Templates"\
        }\
    ],
    "info": {
        "per_page": 200,
        "count": 200,
        "page": 1,
        "more_records": true
    }
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-features.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)