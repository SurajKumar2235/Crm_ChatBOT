
# Convert Inventory Records

#### Purpose

To convert inventory records. The following are the conversions you can perform:

- **Quotes** to **Sales Orders** or **Invoices**
- **Sales Orders** to **Invoices**

#### Endpoints

[POST /Quotes/{record\_id}/actions/convert](https://www.zoho.com/crm/developer/docs/api/v7/inventory-convert.html)

[POST /Sales\_Orders/{record\_id}/actions/convert](https://www.zoho.com/crm/developer/docs/api/v7/inventory-convert.html)

### Request Details

#### Request URLs

##### To convert Quotes module record to Sales Order or Invoice record:

{api-domain}/crm/{version}/Quotes/{record\_id}/actions/convert

##### To convert Sales Orders module record to Invoice record:

{api-domain}/crm/{version}/Sales\_Orders/{record\_id}/actions/convert

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope= ZohoCRM.mass\_convert.{module\_api\_name}.CREATE

**Note:** _Specify the API name of the parent module, from which you want to convert the record._

#### Possible modules names

Quotes, and Sales Orders

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Quotes/3652397000007566544/actions/convert"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@input.json"
-X POST
```

#### Input JSON Keys

- convert\_toJSON array, mandatory



Represents the details of the module to which you want to convert the record.



  - moduleJSON object, mandatory



    The API name and the unique ID of the module to which you want to convert the record. Use the [GET - Modules API](https://www.zoho.com/crm/developer/docs/api/v7/modules-api.html) to retrieve modules API names and IDs.

**Notes**

- Upon conversion, the tags will be carried over to the converted record.
- The record being converted is considered the **parent record**, and the converted record is considered as the **child record**.
- To perform inventory record conversions, it is necessary to enable inventory module permission in both the **Organize modules** and **Security Control**. If these permissions are not enabled, the system will give a **NO\_PERMISSION** error. Please note that only users with admin access has access to these settings.
  - To enable the **Organize Modules** permission, go to **Setup** \> **Customization** \> **Modules and Fields > Organize Modules** tab. Choose the module you want to enable and grant permission.
  - To enable **Security Control** permissions, go to **Setup** \> **Security Control** \> **Profiles**. Select the desired profiles (only custom profiles, for the system-defined profiles, it is already enabled) that require access to the modules, choose the modules (Quotes and Sales Orders) you want to enable from **Convert** and **Mass Conver** t options in **Import/Export Permissions** section, and grant permission.

#### Sample Input

``` json
Copied{
    "data": [\
        {\
            "convert_to": [\
                {\
                    "module": {\
                        "id": "2423488000000000171",\
                        "api_name": "Sales_Orders"\
                    }\
                }\
            ]\
        }\
    ]
}
```

#### Possible Errors

- MANDATORY\_NOT\_FOUNDHTTP 400



Required field not found



**Resolution:** The 'convert\_to' field is missing in your input body. Please specify the required field.

- AMBIGUITY\_DURING\_PROCESSINGHTTP 400



The ID given in the request body does not belong to the respective module from which you are trying to convert



**Resolution:** Specify the required field with its valid module API name and ID.

- EXPECTED\_FIELD\_MISSINGHTTP 400



The 'convert\_to' JSON array is missing or empty



**Resolution:** Specify the mandatory 'convert\_to' key in the input body.

- INVALID\_DATAHTTP 400



- The 'convert\_to' data type seems to be invalid
- The given 'module' data type seems to be invlaid
- The given 'id' seems to be invalid
- Invalid data type of module ID
- The data type of the API name is invalid
- The requested ID given seems to be invalid
- The requested module name given seems to be invalid
- Multiple modules have been used for conversion in the request body

**Resolutions:**

- The 'convert\_to' must be a JSON array. Please specify the valid data type.
- The 'module' must be a JSON object. Please specify the valid data type.
- Please specify the valid module ID.
- Specify a valid data type for the module ID. Accepted data type is 'string.'
- The data type of the API name should be a string.
- Specify a valid record ID in the request.
- Specify a valid [module API name](https://www.zoho.com/crm/developer/docs/api/v7/modules-api.html) in the request.
- One module for conversion per action is allowed.

- ID\_ALREADY\_CONVERTEDHTTP 400



ID already converted



**Resolution:** The record you have specified has already been converted. Please specify another unique record ID.

- NOT\_APPROVEDHTTP 400



Specified parent record has not been approved



**Resolution:** You cannot convert a record that is still in approval process.

- NOT\_REVIEWEDHTTP 400



Specified parent record has not been reviewed



**Resolution:** You cannot convert a record that is still in review process.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to the endpoints section above.

- DUPLICATE\_DATAHTTP 401



Duplicate unique value has been found

**Resolution:** If the unique field in the target module already has a record with the same value as the one being converted, the conversion will not proceed. Ensure that the unique field value for the record being converted is distinct from existing records in the target module.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have **ZohoCRM.modules.Quotes.CREATE** (or) **ZohoCRM.modules.SalesOrders.CREATE** scope.

Create a new  token with valid scope the required scopes. Refer to scope section above.

- AUTHENTICATION\_FAILUREHTTP 401



Authentication failed

**Resolution:** Pass the access token in the request header of the API call.

- NO\_PERMISSIONHTTP 403



- Permission is denied for the parent module or child module
- The parent or child module is disabled in Organize Modules

**Resolutions:**

- Enable permission for the parent or child module. For that, refer to the note section below.
- Enable permission for the parent or child module in the [Organize](https://help.zoho.com/portal/en/kb/crm/customize-crm-account/customizing-modules/articles/module-settings#Organize_Modules) Modules section. Refer to the note section below for more details.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to the request URL section above.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in the server. Contact support team.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "Sales_Orders": {\
                    "name": "Patricia",\
                    "id": "2423488000000619001"\
                }\
            },\
            "message": "The record has been converted successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/inventory-convert.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)