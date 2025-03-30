
# User Licenses Count

### Get User Licenses Count

#### Purpose

To retrieve the count of purchased, active and available user licenses in your organization.

#### Endpoints

[GET /\_\_features/user\_licenses](https://www.zoho.com/crm/developer/docs/api/v7/get-user-licenses.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/\_\_features/user\_licenses

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.features.READ

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/__features/user_licenses"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-X GET
```

#### Response JSON Keys

- detailsJSON object



Represents the details of user licenses.



  - available\_countJSON object



    Indicates the number of user licenses that are available.

  - used\_countJSON object



    Indicates the number of user licenses that are active.

  - limitJSON object



    Indicates the total number of user licenses purchased.
- componentsJSON object



Represents the details of the components inside a feature. The value will be null for User Licenses feature.

- api\_namestring



Represents the api name of the feature.

- parent\_featurestring



Represents the parent feature of the feature, if applicable.

- module\_supportedboolean



Indicates whether the feature is specific to a module.

- feature\_labelstring



Represents the feature name. This will be translated to the user's language.


#### Sample Response

``` json
Copied{
    "__features": [\
        {\
            "components": null,\
            "api_name": "user_licenses",\
            "parent_feature": null,\
            "module_supported": false,\
            "details": {\
                "available_count": {\
                    "total": 3\
                },\
                "used_count": {\
                    "total": 7\
                },\
                "limits": {\
                    "total": 10\
                }\
            },\
            "feature_label": "UserLicenses"\
        }\
    ]
}
```

#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Refer to scope section above.


© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-user-licenses.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)