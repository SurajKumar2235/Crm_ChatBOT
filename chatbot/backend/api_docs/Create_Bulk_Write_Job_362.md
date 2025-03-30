- **insert** \- To create CSV records as new records in CRM.
- **update** \- To update an existing record in CRM(This operation does not allow creation of new records).
- **upsert** \- To update an existing record in CRM and create new records, if they do not exist already.

- ignore\_emptyBoolean, optional



**True** \- Ignores the empty values in a column and updates only the fields of a record without empty values

**False or empty** \- The system updates records in CRM with empty values in the given file column.

The default value is **false**.

- callbackJSON Object, optional



A valid URL that allows the HTTP POST method. The Bulk Write Job's details are posted to this URL on successful completion or failure of a job. Sample - "callback" : { "url": "https://sampledomain.com/getzohoresponse", "method": "post" }.

This JSON Object takes two keys— **url** and **method**.



- **url**(string) - A valid URL, which should allow HTTP POST method. The Bulk Write Job's details are posted to this URL on successful completion or failure of a job.
- **method**(string) - The HTTP method of the callback url. The supported value is **post**.

- resourceJSON array, optional



A JSON array of objects containing the API names of modules that you want to import, their field mappings, and the corresponding file IDs obtained from [Upload API](https://www.zoho.com/crm/developer/docs/api/v7/bulk-write/upload-file.html).



- **type** _(string, mandatory)_ \- Represents the type of module that you want to import. The value is **data**.
- **module** _(JSON object, mandatory)_ \- The API name of the module that you select for bulk write job.

**For subforms**: When you want to bulk-write subform data, you must give the API name of the subform here.
- **file\_id** _(string, mandatory)_ \- The **file\_id** obtained from file upload API.
- **find\_by** _(string, mandatory for update and upsert, optional for insert)_ \- The API name of a unique field or ID of a record. The system uses the value of this field to find the existing records in CRM. When you specify this parameter for insert operation, the system will skip the existing records from the file.
- **field\_mappings** _(JSON array, optional)_ \- When the system processes a CSV file, the first row is treated as the header row. Each header name is treated as the field API name and data from a column are populated into the corresponding field represented by the API name. This parameter helps you to skip auto-mapping and define your own field mapping. Note that if you include this array in the input, data in the CSV will be mapped based only on the index value in this array.
  - **api\_name** _(string, mandatory)_ \- The API name of the field present in Zoho module object that you want to import. Refer [Fields Meta Data API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) for the list of fields available in a module. An invalid field API name throws an error.
  - **index** _(number, optional)_ \- The column index of the field you want to map to the CRM field. When you specify a non-existing index value, the system throws an error.
  - **find\_by** _(string, mandatory for lookup fields)_ \- The API name of the unique field in the module against which the system checks if there are existing records in CRM. You can also use id, API names of the system-defined unique fields, custom unique fields, lookup fields, and display columns/fields(the results displayed based on a field, that are listed when you search for an associated lookup. For example, Account Name is the display column when you have a look up in Contacts that points to Accounts.) as find\_by fields.
  - **default\_value** _(JSON object, optional)_ \- Use this key if some of the records do not have a value in a column, and you want to replace it with a default value. Example: {"value": "Trade Show"}.

**Notes**

- ###### For Subforms


The **field\_mappings** array must have the following mandatory object, besides the details of the other fields of the subform. This is to map the subform record with the respective parent record.


``` plaintext
"api_name":"Parent_Id",
"find_by":"id",
"index":"the_index_in_the_csv"
```

- ###### For Custom Layout


To map the bulk data data into a specific layout, you must specify the unique ID of the custom Layout, under the default\_Value JSON Object.


###### Example:



``` plaintext
"api_name": "Layout",
"default_value":
{
    "value": "{custom Layout ID}"
}
```


You can get layout ID from the [Metadata Layouts API](https://www.zoho.com/crm/developer/docs/api/v7/layouts-meta.html).

- You can bulk-insert records in a specific layout of a module. Note that when you insert records using bulk-write the system ignores the custom layout-specific mandatory fields.
- To insert the records in a specific layout, you must specify the name of the custom layout in your CSV file. If left unspecified/incorrect value specified, the system inserts the records in the default layout in that module. Also, you must specify the relevant details in the **field\_mappings** key in the input. Refer to sample input for more details.
- For field-types such as Date and Date/Time, there are default formats. For instance, for Date, the default format is MM/dd/yyyy, and for Date/Time, the default format is MM/dd/yyyy HH:mm:ss. If you specify the value for these fields in any other format in your CSV file, you must specify the format in your input. Refer to sample input for more details. Click [here](https://www.zoho.com/sites/zweb/images/crm/allowed-formats-for-fields-in-create-bulk-write-job-api.pdf) to know the allowed formats for Date, Date/Time, and Number fields.

#### Sample input to bulk-insert Subform data

``` json
Copied{
    "operation": "insert",
    "ignore_empty": true,
    "callback": {
        "url": "http://requestbin.fullcontact.com/1fcimk51",
        "method": "post"
    },
    "resource": [\
        {\
            "type": "data",\
            "module": {\
                "api_name": "Contact_Sub" //The API name of the subform in the Contacts module\
            },\
            "file_id": "111111000000541985",\
            "field_mappings": [\
                {\
                    "api_name": "Parent_Id", //The CSV must contain the parent record ID of the contact\
                    "find_by": "id",\
                    "index": 3\
                },\
                {\
                    "api_name": "Secondary Phone",\
                    "index": 1\
                },\
                {\
                    "api_name": "Secondary Email",\
                    "index": 0\
                }\
            ]\
        }\
    ]
}
```

#### Sample input for bulk update

``` json
Copied{
    "operation": "update",
    "ignore_empty": true,
    "callBack": {
        "url": "http://requestbin.fullcontact.com/1bvgfh61",
        "method": "post"
    },
    "resource": [\
        {\
            "type": "data",\
            "module": {\
                "api_name": "Contacts"\
            },\
            "find_by": "id",\
            "file_id": "111111000001492610",\
            "field_mappings": [\
                {\
                "api_name": "Layout",\
                "default_value": {\
                    "value": "5725767000001022168" /*Specify the unique ID of the Custom Layout.\
If this ID is not specified, the update will be applied to all layouts.*/\
                }\
            },\
            {\
                "api_name": "id",\
                "index": 1\
            },\
            {\
                "api_name": "Last_Name",\
                "index": 2\
            },\
            {\
                "api_name": "Account_Lookup",\
                "index": 3,\
                "find_by": "Account_Name"\
            }\
        ]\
    }\
]
}
```

#### Response Structure

- statusstring



Specifies the status of the API call. Sample - "status": "success".

- messagestring



Specifies the pre-defined comments for the job. Useful in case any errors occur.

- detailsJSON object



Contains the following details of the bulk write job.



- **id**(string) - Specifies the unique identifier(job\_id) of the bulk write job. Sample - "id": "111111000000541958".
- **created\_by**(JSON object) - Specifies the ID and Name of the user who initiated the bulk write job. Sample - "created\_by": { "id": "111111000000035795", "name": "Patricia Boyle" }.

#### Sample response

``` json
Copied{
  "status": "success",
  "code": "SUCCESS",
  "message": "success",
  "details": {
    "id": "111111000000541958",
    "created_by": {
      "id": "111111000000035795",
      "name": "Patricia Boyle "
    }
  }
}
```

#### Request JSON for parent-child modules

The parent module is the main module while subforms, line items, multi-select lookup fields and multi-user lookup fields are the children in the parent module. You must have **individual CSV files** for the parent and children.

- character\_encodingString, optional



Represents the charset of the uploaded file. It is usually auto-detected, but if specified, then it will be used to read the file.

- operationString, mandatory



Represents the type of operation you want to perform on the bulk write job.



Values are



- **insert** \- To create CSV records as new records in CRM.
- **update** \- To update an existing record in CRM(This operation does not allow creation of new records).
- **upsert** \- To update an existing record in CRM and create new records, if they do not exist already.

- ignore\_emptyBoolean, optional



**True** \- Ignores the empty values in a column and updates only the fields of a record without empty values

**False or empty** \- The system updates records in CRM with empty values in the given file column.

The default value is **false**.

- callbackJSON Object, optional



A valid URL that allows the HTTP POST method. The Bulk Write Job's details are posted to this URL on successful completion or failure of a job. Sample - "callback" : { "url": "https://sampledomain.com/getzohoresponse", "method": "post" }.

This JSON Object takes two keys— **url** and **method**.



- **url**(string) - A valid URL, which should allow HTTP POST method. The Bulk Write Job's details are posted to this URL on successful completion or failure of a job.
- **method**(string) - The HTTP method of the callback url. The supported value is **post**.

- resourceJSON array, mandatory



A JSON array of objects containing the API names of the parent and children modules that you want to import, their field mappings, and the corresponding file IDs obtained from the [Upload API](https://www.zoho.com/crm/developer/docs/api/v7/bulk-write/upload-file.html). **Note that the first object in this array must contain the details of the parent module.** Note that when you want to bulk-write data to a parent module that has a multi-select lookup field, your first CSV file must contain the data of the parent module, and the second CSV file must contain the data of the linking module.



- **type** _(string, mandatory)_ \- Represents the type of module that you want to import. The value is **data**.
- **module** _(JSON object, mandatory)_ \- The API name of the module that you select for bulk write job.

**For subforms or multi-user lookup**, give their respective API names. For multi-select lookup, specify the API name of the linking module.
- **file\_id** _(string, mandatory)_ \- The **file\_id** obtained from the file upload API. This ID must be the same for both the parent and child modules.
- **file\_names** _(JSON array, mandatory)_ \- The name of the CSV file you have uploaded. This is to map the right CSV with the right module.
- **find\_by** _(string, mandatory for update and upsert, optional for insert)_ \- The API name of a unique field or ID of a record. The system uses the value of this field to find the existing records in CRM. When you specify this parameter for insert operation, the system will skip the existing records from the file.
- **field\_mappings** _(JSON array, mandatory)_ \- When the system processes a CSV file, the first row is treated as the header row. Each header name is treated as the field API name and data from a column are populated into the corresponding field represented by the API name. This parameter helps you to skip auto-mapping and define your own field mapping. Note that if you include this array in the input, data in the CSV will be mapped based only on the index value in this array.
  - **api\_name** _(string, mandatory)_ \- The API name of the field present in Zoho module object that you want to import. Refer [Fields Meta Data API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) for the list of fields available in a module. An invalid field API name throws an error.
  - **parent\_column\_index** _(number, mandatory for the child object in the resource array)_ \- This key helps to map the right parent record with the child record. For example, consider that your parent module is Leads and it has a subform. The parent CSV has the data of 500 records, and the subform CSV has the data of 500 subform records. Each of these subform records belongs to a specific lead. So, to map the right child with the right parent, you must use the "parent\_column\_index" key. To establish this, there must be a common column in both parent and the child.

    For subforms and line items, it must be the "Parent\_Id".

    For multi-select lookup and multi-user lookup, it must be the API name of the parent lookup in the linking module.

    For example, if you have the parent module as Leads which has a multi-select lookup to Contacts, then the linking module will be Leads vs Contacts. So, your parent CSV will be for Leads and the child CSV for the linking module. Here, to map the child with the parent, you must specify the parent\_column\_index for the lookup field of the parent in the linking module.

    Refer to the Note section for more details.
  - **index** _(number, optional)_ \- The column index of the field you want to map to the CRM field. When you specify a non-existing index value, the system throws an error.
  - **find\_by** _(string, mandatory for lookup fields)_ \- The API name of the unique field in the module against which the system checks if there are existing records in CRM. You can also use id, API names of the system-defined unique fields, custom unique fields, lookup fields, and display columns/fields(the results displayed based on a field, that are listed when you search for an associated lookup. For example, Account Name is the display column when you have a look up in Contacts that points to Accounts.) as find\_by fields. **When you include parent\_column\_index, this key is not required.**
  - **default\_value** _(JSON object, optional)_ \- Use this key if some of the records do not have a value in a column, and you want to replace it with a default value. Example: {"value": "Trade Show"}.

**Notes**

- The details of the parent must be the first object in the "resource" array.
- Each module can be mapped with only one CSV file.
- For subforms and line items, you can map any system-defined and custom fields.
- For multi-select lookup and multi-user lookup, you can only map the lookup fields in the linking module.

#### Request JSON

``` json
Copied{
    "operation": "insert",
    "ignore_empty": true,
    "callback": {
        "url": "https://entbf6cqr4sl.x.pipedream.net/",
        "method": "post"
    },
    "resource": [\
        {\
            "type": "data",\
            "module": {\
                "api_name": "Leads",\
                "id": "3652397000000002181"\
            },\
            "file_id": "3652397000014524001",\
            "file_names": [\
                "bulk_write_leads.csv"\
            ],\
            "field_mappings": [\
                {\
                    "api_name": "Last_Name",\
                    "index": 0\
                },\
                {\
                    "api_name": "Company",\
                    "index": 1\
                },\
                {\
                    "api_name": "Email",\
                    "find_by": "email",\
                    "index": 2\
                },\
                {\
                    "api_name": "User",\
                    "find_by": "email",\
                    "index": 3\
                }\
            ]\
        },\
        {\
            "type": "data",\
            "module": {\
                "api_name": "Secondary",\
                "id": "3652397000000002180"\
            },\
            "file_id": "3652397000014524001",\
            "file_names": [\
                "bulk_write_subform.csv"\
            ],\
            "field_mappings": [\
                {\
                    "api_name": "Secondary_Email",\
                    "index": 0\
                },\
                {\
                    "api_name": "Secondary_Phone",\
                    "index": 1\
                },\
                {\
                    "api_name": "Parent_Id",\
                    "parent_column_index": 0,\
                    "index": 2\
                },\
                {\
                    "type": "data",\
                    "module": {\
                        "api_name": "Lead_Contact_Lookup",\
                        "id": "3652397000000002185"\
                    },\
                    "file_id": "425153000103247021",\
                    "file_names": [\
                        "LeadsMultiLookUp.csv"\
                    ],\
                    "field_mappings": [\
                        {\
                            "api_name": "Leads",\
                            "parent_column_index": 0,\
                            "index": 0\
                        },\
                        {\
                            "api_name": "Contacts",\
                            "find_by": "id",\
                            "index": 1\
                        }\
                    ]\
                }\
            ]\
        }\
    ]
}
```

#### Response Structure

- statusstring



Specifies the status of the API call as "COMPLETED", "IN PROGRESS", "FAILED".

- resourceJSON array



Each object in this array represents the details of the job such as the module(parent and children, individually), field mappings, and the status pertaining to this CSV file.

- typestring



Contains the value "data" representing a data import.

- codestring



Represents the status of the data in this CSV file.

- fileJSON object



Represents the status of data import of this CSV file. It also contains the CSV file name, number of records present in the CSV, number of records added, skipped, and updated.


#### Possible Errors

- MANDATORY\_FIELDS\_NOT\_MAPPED HTTP 400



All the mandatory fields in the module are not mapped.

**Resolution:** Map all the mandatory fields in the module.

- MANDATORY\_NOT\_FOUND HTTP 400



Mandatory key or value is not specified in the request body. Example: "message": "Required key find\_by is not available".

**Resolution:** Include the required key in the input.

- INVALID\_FIELD HTTP 400



The field API name is invalid.

**Resolution:** Specify the correct API name of the field.

- INVALID\_FORMAT HTTP 400



You have entered the date in the wrong format.

**Resolution:** Input the date in the correct format.

- INVALID\_FILE\_ID HTTP 400



The file ID specified is invalid.

**Resolution:** Specify the correct file ID you received while uploading the CSV file.

- HEADER\_LIMIT\_EXCEEDED HTTP 400



The number of fields mapped has exceeded the maximum limit of 200.

**Resolution:** You can only map up to 200 fields.

- COLUMN\_INDEX\_NOT\_FOUND HTTP 400



Index is mapped with negative values.

**Resolution:** "index" can only take positive integer values.

- MODULE\_NOT\_AVAILABLE HTTP 400



The module name specified is invalid.

**Resolution:** The API name of the module is either wrong or this module is not supported for a bulk write job. Refer to the "Possible module name" section for the list of supported modules.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.bulk.CREATE. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to create

**Resolution:** The user does not have permission to create a bulk write job. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to create.

**Resolution:** The user does not have the permission to create a bulk write job. Contact your system administrator.


#### Sample Response

``` json
Copied{
    "status": "COMPLETED",
    "resource": [\
        {\
            "status": "COMPLETED",\
            "module": {\
                "api_name": "Leads",\
                "id": "3652397000000002181"\
            },\
            "field_mappings": [\
                {\
                    "api_name": "Last_Name",\
                    "index": 0,\
                    "format": null,\
                    "find_by": null,\
                    "module": null,\
                    "parent_column_index": null,\
                    "default_value": null\
                },\
                {\
                    "api_name": "Company",\
                    "index": 1,\
                    "format": null,\
                    "find_by": null,\
                    "module": null,\
                    "parent_column_index": null,\
                    "default_value": null\
                },\
                {\
                    "api_name": "Email",\
                    "index": 2,\
                    "format": null,\
                    "find_by": "email",\
                    "module": null,\
                    "parent_column_index": null,\
                    "default_value": null\
                },\
                {\
                    "api_name": "User",\
                    "index": 3,\
                    "format": null,\
                    "find_by": "email",\
                    "module": null,\
                    "parent_column_index": null,\
                    "default_value": null\
                }\
            ],\
            "type": "data",\
            "code": "COMPLETED",\
            "file": {\
                "status": "COMPLETED",\
                "name": "bulk_write_leads.csv",\
                "added_count": 100,\
                "skipped_count": 0,\
                "updated_count": 0,\
                "total_count": 100\
            }\
        },\
        {\
            "status": "COMPLETED",\
            "module": {\
                "api_name": "Secondary",\
                "id": "3652397000000002180"\
            },\
            "field_mappings": [\
                {\
                    "api_name": "Secondary_Email",\
                    "index": 0,\
                    "format": null,\
                    "find_by": null,\
                    "module": null,\
                    "parent_column_index": null,\
                    "default_value": null\
                },\
                {\
                    "api_name": "Secondary_Phone",\
                    "index": 1,\
                    "format": null,\
                    "find_by": null,\
                    "module": null,\
                    "parent_column_index": null,\
                    "default_value": null\
                },\
                {\
                    "api_name": "Parent_Id",\
                    "index": 3,\
                    "format": null,\
                    "find_by": null,\
                    "module": null,\
                    "parent_column_index": 0,\
                    "default_value": null\
                }\
            ],\
            "type": "data",\
            "code": "COMPLETED",\
            "file": {\
                "status": "COMPLETED",\
                "name": "bulk_write_subform.csv",\
                "added_count": 69,\
                "skipped_count": 0,\
                "updated_count": 0,\
                "total_count": 69\
            }\
        },\
        {\
            "status": "COMPLETED",\
            "module": {\
                "api_name": "Lead_Contact_Lookup",\
                "id": "3652397000000002185"\
            },\
            "field_mappings": [\
                {\
                    "api_name": "Contacts",\
                    "index": 1,\
                    "format": null,\
                    "find_by": "id",\
                    "module": null,\
                    "parent_column_index": null,\
                    "default_value": null\
                },\
                {\
                    "api_name": "Leads",\
                    "index": 0,\
                    "format": null,\
                    "find_by": null,\
                    "module": null,\
                    "parent_column_index": null,\
                    "default_value": null\
                }\
            ],\
            "type": "data",\
            "code": "INPROGRESS",\
            "file": {\
                "status": "COMPLETED",\
                "name": "LeadsMultiLookUp.csv",\
                "added_count": 0,\
                "skipped_count": 10,\
                "updated_count": 0,\
                "total_count": 10\
            }\
        }\
    ]
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/bulk-write/create-job.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)