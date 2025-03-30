
# Change Sort Order of Custom Views

#### Purpose

To change the sort order of records in a custom view.

#### Endpoints

[PUT /settings/custom\_views/{cvid}/actions/change\_sort?module={module\_name}](https://www.zoho.com/crm/developer/docs/api/v7/sort-order-cv.html)

[PUT /settings/custom\_views/actions/change\_sort?module={module\_name}](https://www.zoho.com/crm/developer/docs/api/v7/sort-order-cv.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/custom\_views/{cv-id}/actions/change\_sort?module={module\_name}

**For multiple custom views:**

{api-domain}/crm/{version}/settings/custom\_views/actions/change\_sort?module={module\_name}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.custom\_views.{operation\_type}

(or)

scope=ZohoCRM.settings.ALL

#### Possible operation types

ALL - Full access to custom views module

UPDATE - Update custom views

#### Input JSON Keys

- sort\_byJSON object, mandatory



The api name and id of the field by which you want to sort the records.

- sort\_orderstring, mandatory



The order by which you want to sort the records. The possible values are :

**asc** : ascending order

**desc** : descending order


**Note**

You can update up to 100 custom views in a single API call.

#### Sample Request to sort a single Custom View

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/custom_views/1306462000000505004/actions/change_sort?module=Leads"
-X PUT
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Sample Input

``` json
Copied{
    "custom_views": [\
        {\
            "sort_by": {\
                "api_name": "Email",\
                "id" : "1306462000000000563"\
            },\
            "sort_order": "asc"\
        }\
    ]
}
```

#### Sample Response

``` json
Copied{
    "custom_views": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "1306462000000505004"\
            },\
            "message": "custom view updated",\
            "status": "success"\
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

**Resolution:** Client does not have the required OAUTH SCOPE. Create a new client with valid scope. Refer to scope section above for more details.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- INVALID\_DATAHTTP 400



invalid data

**Resolution:** Specify a valid custom view ID in the request URL, and valid API name and ID for the _sort\_by_ key. Check if you have given the correct value for the _sort\_order_ key.

- INVALID\_MODULEHTTP 400



The module name given seems to be invalid

**Resolution:** Specify a valid module name in the request URL.

- MANDATORY\_NOT\_FOUNDHTTP 400



Required field not found

**Resolution:** You have not specified a mandatory key in the input body. Specify all the mandatory keys.


#### Sample Request for multiple Custom Views

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/custom_views/actions/change_sort?module=Leads"
-X PUT
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Sample Input for multiple Custom Views

``` json
Copied{
   "custom_views":[\
      {\
         "sort_by":{\
            "api_name":"Email",\
            "id":"1306462000000000563"\
         },\
         "sort_order":"desc",\
         "id":"1306462000000505004"\
      },\
      {\
         "sort_by":{\
            "api_name":"Company",\
            "id":"1306462000000000555"\
         },\
         "sort_order":"asc",\
         "id":"1306462000000091501"\
      }\
   ]
}
```

Show full

Show less

#### Sample Output for multiple Custom Views

``` json
Copied{
    "custom_views": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "1306462000000505004"\
            },\
            "message": "custom view updated",\
            "status": "success"\
        },\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "1306462000000091501"\
            },\
            "message": "custom view updated",\
            "status": "success"\
        }\
    ]
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/sort-order-cv.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)