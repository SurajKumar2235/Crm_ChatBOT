
- ALREADY\_ACTIVATEDHTTP 400

Cannot activate the active layout

Please specify a valid and deactivated layout ID. Use the [GET Layout Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/layouts-meta.html) to retrieve unique layout IDs. The **status** key in the response from the _Layout Metadata API_ indicates whether the layout is _**active**_ or _**inactive**_.

- NOT\_ALLOWEDHTTP 400

Only profiles associated with the module can be assigned for the layout

**Resolution:** Assign valid profiles to the layout.

- MANDATORY\_NOT\_FOUNDHTTP 400

Mandatory field is missing

**Resolution:** Assign at least one profile to activate a layout. Use the [GET Profiles API](https://www.zoho.com/crm/developer/docs/api/v7/get-profiles.html) to retrieve the IDs of the Profiles.


#### Sample Response

``` json
Copied{
    "layouts": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "5725767000002483149"\
            },\
            "message": "layout activated",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)
