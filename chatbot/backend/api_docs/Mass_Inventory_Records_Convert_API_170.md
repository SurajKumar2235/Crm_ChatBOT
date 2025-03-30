
# Mass Convert Inventory Records

#### Purpose

To mass convert inventory records. The following are the conversions you can perform:

- **Quotes** to **Sales Orders** or **Invoices**
- **Sales Orders** to **Invoices**

You can convert up to **50 records in a single API call.** Note that you can perform the conversion on records from only one of these inventory modules in a single API call. It operates asynchronously, meaning you won't receive an immediate response to your request. Instead, you'll be provided with a job ID, with which you can check the status of your conversion request using [Mass Inventory Records Convert Status](https://www.zoho.com/crm/developer/docs/api/v7/mass-inventory-conversion-status-api.html) API.

#### Endpoints

[POST /Quotes/actions/mass\_convert](https://www.zoho.com/crm/developer/docs/api/v7/mass-inventory-convert.html)

[POST /Sales\_Orders/actions/mass\_convert](https://www.zoho.com/crm/developer/docs/api/v7/mass-inventory-convert.html)

### Request Details

#### Request URLs

###### **To convert Quotes module records to Sales\_Orders or Invoices:**

{api-domain}/crm/{version}/Quotes/actions/mass\_convert

###### **To convert Sales Orders records to Invoices:**

{api-domain}/crm/{version}/Sales\_Orders/actions/mass\_convert

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope= ZohoCRM.mass\_convert.{module\_api\_name}.CREATE

**Note:** _Specify the API name of the parent module from which you are trying to convert._

#### _Possible modules names_

_Quotes, and Sales Orders_

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Quotes/actions/mass_convert"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@input.json"
-X POST
```

#### Input JSON

- convert\_toJSON array, mandatory



It represents the details of the module to which you want to convert the record. In the sample request, you can see the conversion of Quotes to Sales Orders.



  - moduleJSON object, mandatory



    It represents the module details of the child record.



    - idstring, mandatory



      It represents the unqiue ID of the child module.

    - api\_namestring, mandatory



      It represents the api\_name of the child module.
- carry\_over\_tagsboolean, mandatory



Specify whether to carry over the tags from the parent record to the child records. Possible values are : **true** and **false.**

- assign\_toJSON object, optional



Specify the owner details for the child record.  By default, the owner of the parent record will be assigned as the owner of the converted record too. Use the [Get Users API](https://www.zoho.com/crm/developer/docs/api/v7/get-users.html) to get the IDs of the users.

- related\_modulesJSON array, optional



It represents the API name and ID of the related modules such as Tasks, Meetings, and Calls. Use this key if you want to convert the related records associated with the requested records.

Use the [Modules API](https://www.zoho.com/crm/developer/docs/api/v7/modules-api.html) to get the IDs of the modules.

- idsJSON array, mandatory



Specify the unique ID of the records that you want to convert.  Use the Get Records API to get the record IDs. You can specify upto **50 record** IDs. Use the [Get Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html) to get the record IDs.


**Note**

- The record being converted is considered the **parent record**, and the converted record is considered as the **child record**.

#### Sample Input

``` json
Copied{
    "convert_to": [\
        {\
            "module": {\
                "id": "2423488000000000171",\
                "api_name": "Sales_Orders"\
            },\
            "carry_over_tags": true\
        }\
    ],
    "assign_to": {
        "id": "2423488000000483001"
    },
    "related_modules": [\
        {\
            "api_name": "Calls",\
            "id": "2423488000000017015"\
        },\
        {\
            "api_name": "Tasks",\
            "id": "2423488000000000143"\
        }\
    ],
    "ids": [\
        "2423488000000625004",\
        "2423488000000625032"\
    ]
}
```

#### Possible Errors

- MANDATORY\_NOT\_FOUNDHTTP 400



- One of the mandatory fields, 'ids', is missing
- One of the mandatory fields, 'convert\_to', is missing
- One of the mandatory fields, 'carry\_over\_tags', is missing
- One of the mandatory fields, 'module' is missing in the input body

**Resolution:**

Specify all the mandatory fields in the input body. Refer to the input JSON keys above.

- INVALID\_DATAHTTP 400



- One or more of the given IDs seems to be invalid.
- IDs in the input body other than long or string data type
- The 'convert\_to' data type seems to be invalid
- The given 'module' data type seems to be invalid
- The provided parent or child module name is invalid
- Multiple modules have been used for conversion in the request body
- The parent module records have the ID of the deleted record

**Resolutions:**

- Specify the valid record IDs.
- The expected data types for the ID are long or string.
- The 'convert\_to' must be a JSON array. Please specify the valid data type.
- The 'module' must be a JSON object. Please specify the valid data type.
- Specify the valid parent or child module name.
- One module for conversion per action is allowed.
- Specify the non-deleted record ID in the parent module

- NO\_PERMISSIONHTTP 403



- Permission is denied for the parent module or child module
- The parent or child module is disabled in Organize Modules

**Resolutions:**

- Enable permission for the parent or child module.
- Enable permission for the parent or child module in the [Organize](https://help.zoho.com/portal/en/kb/crm/customize-crm-account/customizing-modules/articles/module-settings#Organize_Modules) Modules section.

- AMBIGUITY\_DURING\_PROCESSINGHTTP 400



The ID given in the request body does not belong to the respective module which you are tyring to convert



**Resolutions:** The 'convert\_to' field is missing in your input body. Please specify the required field.

- LIMIT\_EXCEEDEDHTTP 400



Limit has been exceed



**Resolutions:** You can convert only upto 50 records in a single API call. Limit the number of records to 50 and try again.

- EXPECTED\_FIELD\_MISSINGHTTP 400



The 'convert\_to' JSON array is missing or empty



**Resolutions:** One of the mandatory fields or the 'convert\_to' key should not be empty or missed.

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

**Resolution:** Client does not have **ZohoCRM.mass\_convert.Quotes.CREATE (or) ZohoCRM.mass\_convert.SalesOrders.CREATE** scope.

Create a new token with the required scopes. Refer to scope section above.

- AUTHENTICATION\_FAILUREHTTP 401



Authentication failed

**Resolution:** Pass the access token in the request header of the API call.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to the request URL section above.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in the server. Contact support team.


**Notes**

- To perform inventory record conversions, it is necessary to enable inventory module permission in both the Organize modules and Security Control. If these permissions are not enabled, the system will give a **NO\_PERMISSION** error. Please note that only users with admin access has access to these settings.
  - To enable the **Organize Modules** permission, go to **Setup** \> **Customization** \> **Modules and Fields > Organize Modules** tab. Choose the module you want to enable and grant permission.
  - To enable **Security Control** permissions, go to to **Setup** \> **Security Control** \> **Profiles**. Select the desired profiles (only custom profiles, for the system-defined profiles, it is already enabled) that require access to the modules, choose the modules (Quotes and Sales Orders) you want to enable from **Convert** and **Mass Conver** t options in **Import/Export Permissions** section, and grant permission.

#### Sample Response

``` json
Copied{
    "code": "SCHEDULED",
    "details": {
        "job_id": "2423488000000626117"
    },
    "message": "Mass Convert scheduled successfully",
    "status": "success"
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/mass-inventory-convert.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)