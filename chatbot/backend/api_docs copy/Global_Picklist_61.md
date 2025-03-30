

# Update Global Picklist

#### Purpose

To update a global picklist or global set.

#### Endpoints

[PATCH /settings/global\_picklists/{global\_picklist\_id}](https://www.zoho.com/crm/developer/docs/api/v7/update-global-picklist.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/global\_picklists/{global\_picklist\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope = ZohoCRM.settings.global\_picklist.UPDATE

(or)

scope = ZohoCRM.settings.global\_picklist.ALL

#### Supported modules

Leads, Contacts, Accounts, Campaigns, Cases, Invoices, Deals, Price Books, Products, Purchase Orders, Quotes, Sales Orders, Solutions, Vendors, Calls, Tasks, Events, Users, DealHistory, QuotedItems, OrderedItems, PurchaseItems, InvoicedItems, Visits, Services, Appointments, and Custom.

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/global_picklists/2423488000000725001"
-X PATCH
-d "@input.json"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Input JSON Keys

- display\_labelstring, mandatory



The unique name for the global picklist, which will be displayed in the CRM UI. A maximum of **50** characters are allowed.

- descriptionstring, optional



Represents the description for the global picklist. A maximum of **1000** characters are allowed.

- pick\_list\_values\_sorted\_lexicallyboolean, optional



It represents the sort order preference for the global set values.

Possible values are : **true** \- alphabetical order, **false** \- given order

- pick\_list\_valuesJSON array, mandatory



Contains the details of different values of the global set.



  - display\_valuestring, optional (mandatory - when you create a new option)



    The unique label displayed in the CRM interface for a specific value. A maximum of **120 characters** are allowed.

    Please note that **emojis** and **special characters** are **not allowed** in the display value. This key is mandatory when you create a new option.

  - actual\_valuestring, optional



    It represents the unique actual value associated with the particular option. Please note that **emojis** and **special characters** are **not allowed** in the display value.

  - idstring, mandatory



    It represents the unique ID of an option. This key is mandatory when you an option. Use the [GET - Global Picklists API](https://www.zoho.com/crm/developer/docs/api/v7/get-global-picklist.html) to retrieve option IDs.

  - sequence\_numberinteger, optional



    It represents the position of a value in a set of picklist options.

  - typestring, optional



    It represents whether the option is used or unused. A maximum of **1000 used options** is allowed, and a maximum of **500 unused options** is allowed.

**Note**

- You can **create** new options, or **update** or **delete** the existing options of a global picklist using this API.
- To update a value in the picklist, you must provide the **ID** of the picklist value.
- You cannot update a global picklist option when the picklist is scheduled for deletion.
- You can delete only **one** option in a single API call. Note that you cannot delete an option which is associated with the features like **Blueprint**, **Workflow**, etc.
- Options which are associated with **record creation**, **Workflow**, **ABM mapping**, and **Process Flow** cannot be  moved from **used state to unused state**.
- Options which are associated with **fields update**, **record creation**, **Workflow**, **ABM mapping**, and **Process Flow** cannot be deleted.
- A global picklist can have upto **1000** used options and **500** unused options.

#### Sample Input

``` json
Copied{
    "global_picklists": [\
        {\
            "display_label": "Source1",\
            "description": "desc1",\
            "pick_list_values_sorted_lexically": true, // to change the order to alphabetical order\
            "pick_list_values": [\
                {\
                    "display_value": "Advertisement1", // updating the picklist display value\
                    "sequence_number": 2, // updating the order of picklist value\
                    "actual_value": "Advertisement2", // to change the picklist actual value\
                    "id": "211111000000055940", // updating picklist id\
                    "type": "used" // to move the option to used state\
                },\
                {\
                    "display_value": "Cold Call1",\
                    "sequence_number": 2,\
                    "actual_value": "Cold Call2",\
                    "id": "211111000000055942", // picklist id to be updated\
                    "type": "unused" // to move the option to unused state\
                },\
                {\
                    "display_value": "Cold Call2",\
                    "sequence_number": 3,\
                    "actual_value": "Cold Call3",\
                    "id": "211111000000051285",\
                    "type": "unused",\
                    "_delete": null // deleting the option from the global picklist\
                },\
                {\
                    // to create new option id\
                    "display_value": "Employee 33",\
                    "sequence_number": 1,\
                    "actual_value": "Employee 44"\
                }\
            ]\
        }\
    ]
}
```

#### Possible Errors

- INVALID\_DATAHTTP 400



- The display\_label contains an emoji or is null
- The global picklist ID given seems to be invalid

**Resoutions:**

- Emojis and special characters are not allowed in the display value. Please specify a valid non-empty value.
- Provide a valid unique ID of a global picklist. Use the [GET Global Picklist API](https://www.zoho.com/crm/developer/docs/api/v7/get-global-picklist.html) to obtain the unique ID for the global picklist and the IDs of the options within it.

- LIMIT\_EXCEEDEDHTTP 400



- The values in the picklist have reached their limit
- The limit for the used or unused option has been reached.
- Global picklists limit exceeded

**Resolutions:**

- A maximum of **1000 used options** and **500 unused options** can be added for a global set. Ensure that your global set options are within its limit.
- You have already created the maximum number of global sets possible for your org. Refer to the [feature-wise comparison of Zoho CRM Editions](https://www.zoho.com/crm/help/complete-feature-list.html) for more information.

- DUPLICATE\_DATAHTTP 400



- Duplicate display\_label
- Duplicate display\_value has been found among the picklist options

**Resolutions:**

- Ensure that the **display\_label** for the global set is a unique value.
- Verify that each **display\_value** among picklist options is unique.

- MANDATORY\_NOT\_FOUNDHTTP 400



One or more mandatory fields missing



**Resolution:** To update an option in a global picklist, you must provide its corresponding **ID** or **display\_value**.

- NOT\_ALLOWEDHTTP 400



global picklist deletion in progress



**Resolution:** Updating a global picklist is not possible while it is in the deletion process. Please specify a valid global picklist to update.

- INVALID\_REQUEST\_METHODHTTP 400



The https request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to the endpoints section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** The client does not have a valid scope to create global picklists. Create a valid token with the required scope. Refer to the scope section above.

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
            "message": "global picklist updated successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/update-global-picklist.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)