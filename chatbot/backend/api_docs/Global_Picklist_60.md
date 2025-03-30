

# Create Global Picklist

#### Purpose

To create a [global set](https://help.zoho.com/portal/en/kb/crm/customize-crm-account/customizing-fields/articles/working-with-global-sets).

#### Endpoints

[POST /settings/global\_picklists](https://www.zoho.com/crm/developer/docs/api/v7/create-global-picklists.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/global\_picklists

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.global\_picklist.CREATE

(or)

scope=ZohoCRM.settings.global\_picklist.ALL

#### Supported modules

Leads, Contacts, Accounts, Campaigns, Cases, Invoices, Deals, Price Books, Products, Purchase Orders, Quotes, Sales Orders, Solutions, Vendors, Calls, Tasks, Events, Users, DealHistory, QuotedItems, OrderedItems, PurchaseItems, InvoicedItems, Visits, Services, Appointments, and Custom.

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/global_picklists"
-X POST
-d "@input.json"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"

```

#### Input JSON Keys

- display\_labelstring, mandatory



The unique name for the global picklist, which will be displayed in the CRM UI. A maximum of **50** characters allowed.

- descriptionstring, optional



Represents the description for the global picklist. A maximum of **1000** characters allowed.

- pick\_list\_values\_sorted\_lexicallyboolean, optional



It represents the sort order preference for the global set values.

Possible values are : **true** \- alphabetical order, **false** \- given order (default value)

- pick\_list\_valuesJSON array, mandatory



Contains the details of different values or options of the global set.



  - display\_valuestring, mandatory



    The unique label displayed in the CRM interface for a specific value. A maximum of **120 characters** are allowed.

    Please note that **emojis** and **special characters**  or **empty value** are **not allowed** in the display value.

  - actual\_valuestring, optional



    It represents the unique reference value associated with the particular option. Please note that **emojis** and **special characters** are **not allowed** in the actual value. By default, the **display value** will be used as the **actual value**.

  - sequence\_numberinteger, optional



    It represents the position of a value in a set of picklist options. By default, the sequence will be based on the user's input. See the sample input for reference.

  - typestring, optional



    It represents whether the option is used or unused. The default value for type is **used**. A maximum of **1000 used options** is allowed, and a maximum of **500 unused options** is allowed.

**Note**

- You can create one global set in a single API call. The maximum possible global sets for an org depends on the Zoho CRM edition. See this [document](https://www.zoho.com/crm/help/complete-feature-list.html) for more information.

#### Sample Input

``` json
Copied{
    "global_picklists": [\
        {\
            "display_label": "Source",\
            "description": "Use this picklist option across all modules in your account.",\
            "pick_list_values_sorted_lexically": false,\
            "pick_list_values": [\
                {\
                    "display_value": "Cold Call",\
                    "sequence_number": 2,\
                    "actual_value": "Cold Call",\
                    "type": "used"\
                },\
                {\
                    "display_value": "Twitter",\
                    "sequence_number": 15,\
                    "actual_value": "Twitter",\
                    "type": "used"\
                },\
                {\
                    "display_value": "Facebook",\
                    "sequence_number": 16,\
                    "actual_value": "Facebook",\
                    "type": "unused"\
                },\
                {\
                    "display_value": "Google+",\
                    "sequence_number": 3,\
                    "actual_value": "Google+",\
                    "type": "used"\
                }\
            ]\
        }\
    ]
}
```

#### Possible Errors

- INVALID\_DATAHTTP 400



- The display\_label contains an emoji or is null
- The display label, actual label, or description has exceeded its limit

**Resoutions:**

- Emojis and special characters are not allowed in the display value. Please specify a valid non-empty value.
- Ensure that the values for display\_label, actual\_label, and description adhere to the specified limits. See the [Input JSON Keys](https://www.zoho.com/crm/developer/docs/api/v7/create-global-picklists.html#Input_JSON_Keys) for more information.

- MANDATORY\_NOT\_FOUNDHTTP 400



One or more mandatory fields are missing



**Resolution:** Specify all the mandatory fields in the input. Please refer to the [Input JSON Keys](https://www.zoho.com/crm/developer/docs/api/v7/create-global-picklists.html#Input_JSON_Keys) for more information.

- LIMIT\_EXCEEDEDHTTP 400



- The values in the picklist have reached their limit
- The limit for the used or unused option has been reached.
- Global picklists limit exceeded

**Resolutions:**

- A maximum of 1000 used options and 500 unused options can be added for a global set. Ensure that your global set options are within its limit.
- You have already created the maximum number of global sets possible for your org. Refer to the [feature-wise comparison of Zoho CRM Editions](https://www.zoho.com/crm/help/complete-feature-list.html) for more information.

- DUPLICATE\_DATAHTTP 400



- Duplicate display\_label
- Duplicate display\_value has been found among the picklist options

**Resolutions:**

- Ensure that the **display\_label** for the global set is a unique value.
- Verify that each **display\_value** among picklist options is unique.

- INVALID\_REQUEST\_METHODHTTP 400



The https request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL.

Specify a valid request method. Refer to the endpoints section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** The client does not have a valid scope to create global picklists. Create a valid token with the required scopes. Refer to the scope section above.

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
    "global_picklists": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "2423488000000725001"\
            },\
            "message": "global picklist added successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/create-global-picklists.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)