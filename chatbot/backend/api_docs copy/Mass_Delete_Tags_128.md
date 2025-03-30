
# Mass Delete Tags

#### Purpose

To delete tags in bulk from a module. This is an asynchronous API, and a delete job will be scheduled. You can get the status of the mass delete tags job using the  [GET - Mass Delete Tags Status API](https://www.zoho.com/crm/developer/docs/api/v7/get-mass-delete-tags-status.html).

#### Endpoints

[POST/settings/tags/actions/mass\_delete](https://www.zoho.com/crm/developer/docs/api/v7/mass-delete-tags.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/crm/v7/settings/tags/actions/mass\_delete

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope = ZohoCRM.settings.ALL (or)

scope = ZohoCRM.settings.tags.{operation\_type}

#### Possible operation types

ALL - Full data access

WRITE - Edit tag data

DELETE - Delete tag data

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/tags/actions/mass_delete"
-X POST
-d "input.json"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxd"

```

#### Input JSON Keys

- mass\_deleteJSON array, mandatory



Contains the details of tags from a module for a mass tag deletion job. Note that you can delete tags in bulk from **one** module per API call.



  - moduleJSON object, mandatory



    Represents a module's unique ID and its API name. Use the [GET Module Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/module-meta.html) to retrieve your modules' API names and IDs.

  - tagsJSON array, mandatory



    Each JSON object represents a tag's unique ID. Use the [GET Tags API](https://www.zoho.com/crm/developer/docs/api/v7/get-tag-list.html) to retrieve tags present in a module along with their unique IDs. A maximum of **200** tags can be deleted per API call.

#### Sample Input

``` json
Copied{
    "mass_delete": [\
        {\
            "module": {\
                "id": "2276164000000000125",\
                "api_name": "Leads"\
            },\
            "tags": [\
                {\
                    "id": "2276164000001021044"\
                },\
                {\
                    "id": "2276164000001021045"\
                },\
               .\
               .\
               .\
                {\
                    "id": "2276164000001021053"\
                }\
            ]\
        }\
    ]
}
```

Show full

Show less

#### Response JSON Keys

- codestring



Represents the status of the mass tags deletion job.



**Possible values:** QUEUED, COMPLETED, RUNNING, SCHEDULED, and FAILED.

- detailsJSON object



Represents the unique identifier of the mass tags deletion job. You can get the status of the scheduled job using the [Mass Delete Tags Status API](https://www.zoho.com/crm/developer/docs/api/v7/get-mass-delete-tags-status.html).

- messageJSON object



Represents the message of the current mass tags deletion job.

- statusstring



Represents the status of the API call. Sample - "status": "success".


#### Possible Errors

- INVALID\_DATAHTTP 400



- One or more tags seem to be the invalid

**Resolution:** Specify the valid tag IDs. Use the [GET Tags API](https://www.zoho.com/crm/developer/docs/api/v7/get-tag-list.html) to retrieve tags present in a module along with their unique IDs.
- Tags limit exceeded

**Resolution:** A maximum of **200** tags can be deleted in a single API call. Please specify the tags within this limit.
- The given data seems to be invalid

**Resolution:** Specify valid values. Refer to the Sample Input section above.
- Invalid datatype for the " **tags**" key

**Resolution:** The " **tags**" key should be in **JSON array** format.
- One or more tags seem to be missing

**Resolution:** One or more specified tags have already been deleted. Please specify only the tags that have not been deleted.
- The **"mass\_delete" JSON array** exceeds the allowed limit

**Resolution:** The maximum allowed length of the **"mass\_delete" JSON array** is **1**.

- NOT\_ALLOWEDHTTP 400



One or more tags have been assigned to features

**Resolution:** To delete a tag, it must not be associated with any features such as Blueprint and Workflow Rules.

- AMBIGUITY\_DURING\_PROCESSING HTTP 400



Ambiguity during processing

**Resolution:**  The module's unique ID and API name seem to be mismatched. Please specify the correct module ID along with its corresponding API name. Use the [GET Module Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/module-meta.html)  to retrieve the API names and IDs of your modules.

- MANDATORY\_NOT\_FOUNDHTTP 400



Required fields seem to be missing

**Resolution:** Specify all mandatory fields required to delete tags in bulk. Refer to the Input JSON keys provided above.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to the endpoints section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** The client does not have a valid scope to delete tags. Create a new token with valid scope. Refer to scope section above.

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
    "code": "SCHEDULED",
    "details": {
        "job_id": "2276164000001035002"
    },
    "message": "tags scheduled successfully",
    "status": "success"
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/mass-delete-tags.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)