
# Mass Delete Tags Status

#### Purpose

To get the status of a previously scheduled mass tags deletion job using the [Mass Delete Tags API](https://www.zoho.com/crm/developer/docs/api/v7/mass-delete-tags.html).

#### Endpoints

[GET /settings/tags/actions/mass\_delete?job\_id={mass\_tags\_deletion\_job\_id}](https://www.zoho.com/crm/developer/docs/api/v7/get-mass-delete-tags-status.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/tags/actions/mass\_delete

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope = ZohoCRM.settings.ALL (or)

scope = ZohoCRM.settings.tags.{operation\_type}

#### Possible operation types

ALL - Full data access

READ - Read tag data

#### Parameter

- job\_idstring, mandatory



Represents the unique identifier for the mass delete job you scheduled previously using the [Mass Delete Tags API](https://www.zoho.com/crm/developer/docs/api/v7/mass-delete-tags.html).


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/tags/actions/mass_delete?job_id=2276164000001035002"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxd"

```

#### Response JSON Keys

- job\_idinteger



Represents the unique identifier for the mass delete job scheduled previously.

- total\_countinteger



Represents the number of tags that were intended to be deleted in the job.

- failed\_countinteger



Represents the number of the tags failed to be deleted during the job.

- deleted\_countinteger



Represents the number of tags deleted successfully during the job.

- statusstring



Represents the status of the mass delete job. Example : "status": "COMPLETED".



**Possible values :** COMPLETED, SCHEDULED, and FAILED.


#### Possible Errors

- INVALID\_DATAHTTP 400



The job\_id is invalid

**Resolution:** Specify a valid job ID.

- REQUIRED\_PARAM\_MISSINGHTTP 401



The job\_id parameter in the request

**Resolution:** Include the job\_id key with a valid value you received in the response of the [Mass Delete Tags API](https://www.zoho.com/crm/developer/docs/api/v7/mass-delete-tags.html).


#### Sample Response

``` json
Copied{
    "mass_delete": [\
        {\
            "job_id": "2276164000001035002",\
            "total_count": 8,\
            "failed_count": 0,\
            "deleted_count": 8,\
            "status": "COMPLETED"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-mass-delete-tags-status.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)