
# Create a Profile

#### Purpose

To create a profile.

#### Endpoints

[POST /settings/profiles/{clone-profile-id}/actions/clone](https://www.zoho.com/crm/developer/docs/api/v7/create-profile.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/profiles/{clone-profile-id}/actions/clone

Where, _clone-profile-id_ is the unique ID of the existing profile you want to clone. Use the [Get Profiles API](https://www.zoho.com/crm/developer/docs/api/v7/get-profiles.html) to get this ID.

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.profiles.ALL

(or)

scope=ZohoCRM.settings.profiles.CREATE

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/profiles/3652397000000026011/actions/clone"
-X POST
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@inputData.json"
```

#### Input JSON

- namestring, mandatory



The name of the new profile. Accepts up to 50 characters.

- descriptionstring, optional



A description of the profile. Accepts up to 250 characters.


#### Sample Input

``` json
Copied{
    "profiles": [\
        {\
            "name": "Sales Manager",\
            "description": "Manages Sales for the TX region"\
        }\
    ]
}
```

#### Possible Errors

- DUPLICATE\_DATAHTTP 404



The profile you are trying to create already exists.

**Resolution:** The name of the profile is unique. Create a profile with a different name.

- PROFILE\_LIMIT\_EXCEEDEDHTTP 404



You can have a maximum of 25 profiles for your org.

**Resolution:** Delete unwanted profiles to create new ones within the maximum limit.

- NO\_PERMISSIONHTTP 403



You do not have permission to create a profile.

**Resolution:** Contact your administrator to upgrade your permission.


#### Sample Response

``` json
Copied{
    "profiles": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "3652397000009590009"\
            },\
            "message": "profile created successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/create-profile.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)