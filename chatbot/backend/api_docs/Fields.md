#### Response JSON Keys

- associated\_moduleJSON object



Represents the module of the fields associated with the parent modules.



- **module(string)**\- Represents the module created for the subform or image upload or file upload fields.
- **id(string)**\- Represents the unique id of the module.

- operation\_typeJSON object



Represents the possible source of data for the field



- **web\_update(boolean)**\- Represents whether the field can be updated through web
- **api\_create(boolean)**\- Represents whether the field can be created through api
- **web\_created(boolean)**\- Represents whether the field can be created through web
- **api\_update(boolean)**\- Represents whether the field can be updated through api

- system\_mandatoryboolean



Represents if current field is a system-mandatory field.

**Possible values - true:** The field is a system-mandatory field.

**false:** The field is not a system-mandatory field.

- privateJSON object



Represents the details of compliance settings in your organization. For instance, "private": {

"restricted": true,

"type": "Low",

"export": true

}



- **restricted(boolean)**\- Represents if normal/sensitive data have restricted access when accessed via API.
- **export(boolean)**\- Represents if both normal/sensitive data have restricted access when accessed via export.
- **type(string)**\- Represents the type of restriction. The possible values are Low/High based on field configuration in the layout.

- webhookboolean



Represents if the field is supported in webhook.

- virtual\_fieldboolean



Represents if the field is virtual. Virtual fields are those that are used for reference purposes in subforms, multi-select lookups, multi-user lookups, ISONLINE, FULL\_NAME etc. These fields contain meta properties but do not have actual values.

- json\_typestring



Represents the JSON type of the field. For instance, JSON object, string, etc,.

- textareaJSON object



Contains the details of the multiline field.



  - typestring



    Represents the type of multiline field.

    Supported values :



- **small** supports up to **2000 characters**.
- **large** supports up to **32000 characters**.
- **rich\_text** supports up to **50000 characters**.
- cryptJSON object



Represents the status of the encryption. For instance: "crypt": {

"mode": "encryption",

"status": 1

}

The possible values for the "mode" key are: encryption, decryption;

The possible values for the "status" key are:



- 1 - Represents that the field is encrypted.
- 2- Represents that the encryption/decryption for the field is in progress.

The "null" value represents that the key is decrypted.

- tooltipJSON object



Represents the details of the tooltip (name and value), if the field has one.

- created\_sourcestring



Represents the source of the filed. The possible values for this field are: default, extension, and integration.

- display\_labelstring



The display name of the field. This field will not be translated to user's preferred language. For instance, Lead Owner.

All display labels related to Events are renamed to Meetings.

- field\_labelstring



The display name of the field in the user's preferred language. All field labels related to Events are renamed to Meetings.

- field\_read\_onlyboolean



Represents if the field is read-only always.

**Possible values - true:** The field is always read-only.

**false:** The field is not always a read-only field, it can be updated.

- allowed\_permissions\_to\_updateJSON Object



Represents the default whether the user can read or edit the field, or if the field is hidden.

The value "true" for the key **read-only** represents that the user can only view the field.

The value "true" for the key **read-write** represents that the user can edit the value of the field.

The value "true" for the key **hidden** represents that the field is hidden from the user.

- read\_onlyboolean



Represents if the field is read-only for the current user.

**Possible values - true:** The field read-only for the current user.

**false:** The field is not read-only for the current user.

- display\_labelboolean



Represents the display label of the current field. For instance, Last Name.

- quick\_sequence\_numberinteger



Represents the position of the field in the CRM.

- businesscard\_supportedboolean



Represents if the current field can be added to business card section.

**Possible values - true:** The field can be added to the business card section.

**false:** The field cannot be added to the business card section.

- sharing\_propertiesJSON object



In a lookup field, represents if the user has access to the records that the field looks up to.

- idstring



Represents the unique ID of the current field.

- custom\_fieldboolean



Represents if the current field is a custom field.

**Possible values - true:** The field is a custom field.

**false:** The current field is a default field.

- lookupJSON object



Represents the details of the lookup that the field is related to. For example, for the "Parent\_Id" field in the inventory line item subform "Quoted\_Items", the lookup key contains the API name and ID of the module that the field is related to.

In inventory line item subforms, for fields where the user selects a record from a list such as the Product name, the "lookup" key contains a JSON array "show\_fields". This indicates the field that is displayed when a record is selected for that lookup. For example, for the "Product\_Name" lookup, the users select a product. So, the show\_fields key contains the fields that are displayed while you select the product.

- visibleboolean



Represents if the current field is visible to the user.

**Possible values - true:** The field is visible to the user.

**false:** The current field is not visible to the user.

The **profiles** key represents the permission required for each profile to view this field.

- profilesJSON array



Represents the different profiles that have access to this field and the access permission.

The value **null** represents that the user does not have the Module Customization permission.

- display\_typeinteger



Represents how the field is displayed based on its type .

The value **-1** represents that the field is a normal field while the value 2 represents that the field is "select only" (Eg: Best time to contact field).

- enable\_colour\_codeBoolean



Represents whether you can use color coding for that field.

- history\_trackingJSON object



Represents the history of the picklist field if you have enabled history tracking.

The value null represents that history tracking is not enabled for the field.

- wizardbigint



Represents that the field is a wizard.

- multiselectlookupJSON object



Represents the details such as linking module, connected module, lookup API name etc, of a multi-select lookup field.

- multiuserlookupJSON object



Represents the details such as linking module, connected module, lookup API name etc, of a multi-select user lookup field.

- pick\_list\_values\_sorted\_lexicallyBoolean



Represents whether the values of the picklist are sorted alphabetically.

- subformJSON object



Represents the details of the line items in the inventory modules.

- searchableBoolean



Represents whether the field is supported in a search.

- lengthinteger



Represents the size of the current field.

- sortableBoolean



Represents whether the field is sortable.

- api\_namestring



Represents API name of the current field.

- data\_typestring



Represents CRM field type of the current field. For instance, lookup.

- formulaJSON object



Represents the formula details, if the current field is a formula field.

- decimal\_placeinteger



Represents the number of the decimal places allowed for the current field.

- mass\_updateboolean



Represents if the field can be mass updated.

**Possible values - true:** The current field can be mass updated.

**false:** The current field cannot be mass updated.

- enable\_colour\_codeboolean



Represents if the field can be color-coded.

- pick\_list\_valuesJSON array



Represents the list of all the picklist values, if the field is either a picklist or multi-select picklist field.

The value for the key **type** in each picklist option represents if that option is used or not.

The key **id** represents the unique ID of every picklist option.

**colour\_code** represents the hex code for the color for that picklist value.

The response contains both used and unused picklist values.

- auto\_numberJSON object



Represents the auto-number details if the current field is an Auto-Number field.

- rollup\_summaryJSON object



Represents details of a roll up summary field. Roll up summary fields are used to summarize or aggregate values from a related list.



- return\_type



Specifies the type of the rollup summary field.

- expression JSON Object



Represents the expression used for the rollup summary calculation.



- function\_parameters JSON Array



Specifies the function parameters used in the expression.



- api\_name



Specifies the API name of the fields used in expression


- criteria JSON Object



Specifies the criteria for rollup summary calculation.



- group\_operator



Specifies the group operator used in the criteria (e.g., AND, OR).

- group JSON Array



Represents the group of criteria for the rollup summary calculation.



- comparator



Represents the comparison operator used in the criterion (e.g., not\_equal).

- field JSON Object



Represents the field details for the criterion.



- api\_name



Specifies the API name of the field.

- id



Specifies the ID of the field.


- value



Specifies the value used in the criterion (e.g., ${NOTEMPTY}).


- function



Specifies the function used for the rollup summary calculation (e.g., AVERAGE).


- based\_on\_module JSON Object



Specifies the module on which the rollup summary is based.



- api\_name



Specifies the API name for the module.

- id



Specifies the ID of the module.


- related\_list



Specifies the related list on which the rollup summary is based.



- api\_name



Specifies the API name for the related list.

- id



Specifies the ID of the related list.


- rollup\_based\_on string



Specifies the basis of the rollup summary calculation. It could be module or layout.


#### Sample Response

``` json
Copied{
  "fields": [\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Lead Owner",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": true,\
      "customizable_properties": [\
        "field_of_lookup"\
      ],\
      "display_label": "Lead Owner",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000000002589",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Owner",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "jsonobject",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 8,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 120,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "ownerlookup",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Company",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "unique",\
        "removal",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "add_to_other_layouts"\
      ],\
      "display_label": "Company",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": false,\
      "multi_module_lookup": {},\
      "id": "5725767000000002591",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": true,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Company",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 1,\
      "modified_time": null,\
      "quick_sequence_number": "1",\
      "email_parser": {\
        "fields_update_supported": true,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": "Account_Name"\
      },\
      "rollup_summary": {},\
      "length": 200,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "text",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": true,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "First Name",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "removal",\
        "add_to_other_layouts"\
      ],\
      "display_label": "First Name",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": false,\
      "multi_module_lookup": {},\
      "id": "5725767000000002593",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": false,\
        "edit": true,\
        "quick_create": true,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "First_Name",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 27,\
      "modified_time": null,\
      "quick_sequence_number": "2",\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": "First_Name",\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 40,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "text",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Last Name",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": null,\
      "display_label": "Last Name",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": false,\
      "multi_module_lookup": {},\
      "id": "5725767000000002595",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": false,\
        "edit": true,\
        "quick_create": true,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Last_Name",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": true,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 127,\
      "modified_time": null,\
      "quick_sequence_number": "3",\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": "Last_Name",\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 80,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "text",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Title",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "unique",\
        "removal",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "add_to_other_layouts"\
      ],\
      "display_label": "Designation",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000000002597",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Designation",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 1,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": true,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": "Title",\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 100,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "text",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": true,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Email",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "unique",\
        "removal",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "add_to_other_layouts"\
      ],\
      "display_label": "Email",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000000002599",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": true,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Email",\
      "unique": {\
        "case_sensitive": false\
      },\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 25,\
      "modified_time": "2024-06-30T13:57:21-07:00",\
      "quick_sequence_number": "4",\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": "Email",\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 100,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "email",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Phone",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "unique",\
        "removal",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "add_to_other_layouts"\
      ],\
      "display_label": "Phone",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000000002601",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": true,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Phone",\
      "unique": {\
        "case_sensitive": false\
      },\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 33,\
      "modified_time": "2024-03-12T02:28:00-07:00",\
      "quick_sequence_number": "5",\
      "email_parser": {\
        "fields_update_supported": true,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": "Phone",\
        "Deals": null,\
        "Accounts": "Phone"\
      },\
      "rollup_summary": {},\
      "length": 30,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "phone",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Fax",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "removal",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "add_to_other_layouts"\
      ],\
      "display_label": "Fax",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000000002603",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Fax",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 35,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": true,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": "Fax",\
        "Deals": null,\
        "Accounts": "Fax"\
      },\
      "rollup_summary": {},\
      "length": 30,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "text",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": true,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Mobile",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "unique",\
        "removal",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "add_to_other_layouts"\
      ],\
      "display_label": "Mobile",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000000002605",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Mobile",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 33,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": true,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": "Mobile",\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 30,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "phone",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": true,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Website",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "unique",\
        "removal",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "add_to_other_layouts"\
      ],\
      "display_label": "Website",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000000002607",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Website",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 21,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": true,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": "Website"\
      },\
      "rollup_summary": {},\
      "length": 255,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "website",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": true,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Lead Source",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "removal",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "history_tracking",\
        "display_value_alphabetically",\
        "default_value",\
        "option_add",\
        "add_to_other_layouts",\
        "color_code",\
        "replace_values"\
      ],\
      "display_label": "Lead Source",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000000002609",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Lead_Source",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [\
        {\
          "display_value": "-None-",\
          "sequence_number": 1,\
          "reference_value": "-None-",\
          "colour_code": null,\
          "actual_value": "-None-",\
          "id": "5725767000000003391",\
          "type": "used"\
        },\
        {\
          "display_value": "Houston",\
          "sequence_number": 2,\
          "reference_value": "Houston Showroom",\
          "colour_code": null,\
          "actual_value": "Houston Showroom",\
          "id": "5725767000004370005",\
          "type": "used"\
        },\
        {\
          "display_value": "San Francisco Showroom",\
          "sequence_number": 3,\
          "reference_value": "San Francisco Showroom",\
          "colour_code": null,\
          "actual_value": "San Francisco Showroom",\
          "id": "5725767000004370006",\
          "type": "used"\
        },\
        {\
          "display_value": "Boston Showroom",\
          "sequence_number": 4,\
          "reference_value": "Boston Showroom",\
          "colour_code": null,\
          "actual_value": "Boston Showroom",\
          "id": "5725767000004370007",\
          "type": "used"\
        },\
        {\
          "display_value": "San Francisco Showroommmmm",\
          "sequence_number": 5,\
          "reference_value": "San Francisco Showroommmmm",\
          "colour_code": null,\
          "actual_value": "San Francisco Showroommmmm",\
          "id": "5725767000004370008",\
          "type": "used"\
        },\
        {\
          "display_value": "San",\
          "sequence_number": 6,\
          "reference_value": "San",\
          "colour_code": null,\
          "actual_value": "San",\
          "id": "5725767000004370009",\
          "type": "used"\
        },\
        {\
          "display_value": "Los Angeles Showroom",\
          "sequence_number": 7,\
          "reference_value": "Los Angeles Showroom",\
          "colour_code": null,\
          "actual_value": "Los Angeles Showroom",\
          "id": "5725767000004370004",\
          "type": "unused"\
        },\
        {\
          "display_value": "New",\
          "sequence_number": 8,\
          "reference_value": "New York Showroom",\
          "colour_code": null,\
          "actual_value": "New York Showroom",\
          "id": "5725767000004370003",\
          "type": "unused"\
        }\
      ],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 2,\
      "modified_time": "2024-10-24T08:28:47-07:00",\
      "email_parser": {\
        "fields_update_supported": true,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": "Lead_Source",\
        "Deals": "Lead_Source",\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 120,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": {\
        "api_name": "Showroom_Location",\
        "id": "5725767000004230002"\
      },\
      "history_tracking": null,\
      "data_type": "picklist",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": true,\
      "blueprint_supported": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Lead Status",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "removal",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "history_tracking",\
        "display_value_alphabetically",\
        "default_value",\
        "option_add",\
        "add_to_other_layouts",\
        "color_code",\
        "replace_values"\
      ],\
      "display_label": "Lead Status",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000000002611",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Lead_Status",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [\
        {\
          "display_value": "-None-",\
          "sequence_number": 1,\
          "reference_value": "-None-",\
          "colour_code": null,\
          "actual_value": "-None-",\
          "id": "5725767000000003409",\
          "type": "used"\
        },\
        {\
          "display_value": "Attempted to Contact",\
          "sequence_number": 2,\
          "reference_value": "Attempted to Contact",\
          "colour_code": null,\
          "actual_value": "Attempted to Contact",\
          "id": "5725767000000003405",\
          "type": "used"\
        },\
        {\
          "display_value": "Contact in Future",\
          "sequence_number": 3,\
          "reference_value": "Contact in Future",\
          "colour_code": null,\
          "actual_value": "Contact in Future",\
          "id": "5725767000000003401",\
          "type": "used"\
        },\
        {\
          "display_value": "Contacted",\
          "sequence_number": 4,\
          "reference_value": "Contacted",\
          "colour_code": null,\
          "actual_value": "Contacted",\
          "id": "5725767000000003399",\
          "type": "used"\
        },\
        {\
          "display_value": "Junk Lead",\
          "sequence_number": 5,\
          "reference_value": "Junk Lead",\
          "colour_code": null,\
          "actual_value": "Junk Lead",\
          "id": "5725767000000003411",\
          "type": "used"\
        },\
        {\
          "display_value": "Lost Lead",\
          "sequence_number": 6,\
          "reference_value": "Lost Lead",\
          "colour_code": null,\
          "actual_value": "Lost Lead",\
          "id": "5725767000000003407",\
          "type": "used"\
        },\
        {\
          "display_value": "Not Contacted",\
          "sequence_number": 7,\
          "reference_value": "Not Contacted",\
          "colour_code": null,\
          "actual_value": "Not Contacted",\
          "id": "5725767000000003403",\
          "type": "used"\
        },\
        {\
          "display_value": "Pre-Qualified",\
          "sequence_number": 8,\
          "reference_value": "Pre-Qualified",\
          "colour_code": null,\
          "actual_value": "Pre-Qualified",\
          "id": "5725767000000299017",\
          "type": "used"\
        },\
        {\
          "display_value": "Not Qualified",\
          "sequence_number": 9,\
          "reference_value": "Not Qualified",\
          "colour_code": null,\
          "actual_value": "Not Qualified",\
          "id": "5725767000000149001",\
          "type": "used"\
        },\
        {\
          "display_value": "Lead Source",\
          "sequence_number": 10,\
          "reference_value": "Lead Source",\
          "colour_code": null,\
          "actual_value": "Lead Source",\
          "id": "5725767000000667013",\
          "type": "used"\
        },\
        {\
          "display_value": "Lead income",\
          "sequence_number": 11,\
          "reference_value": "Lead income",\
          "colour_code": null,\
          "actual_value": "Lead income",\
          "id": "5725767000000667015",\
          "type": "used"\
        },\
        {\
          "display_value": "New Lead",\
          "sequence_number": 12,\
          "reference_value": "New Lead",\
          "colour_code": null,\
          "actual_value": "New Lead",\
          "id": "5725767000000678099",\
          "type": "used"\
        },\
        {\
          "display_value": "Qualified",\
          "sequence_number": 13,\
          "reference_value": "Qualified",\
          "colour_code": null,\
          "actual_value": "Qualified",\
          "id": "5725767000000678109",\
          "type": "used"\
        }\
      ],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 2,\
      "modified_time": "2023-06-15T23:18:37-07:00",\
      "email_parser": {\
        "fields_update_supported": true,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 120,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "picklist",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": true,\
      "blueprint_supported": true,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Industry",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "removal",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "history_tracking",\
        "display_value_alphabetically",\
        "default_value",\
        "option_add",\
        "add_to_other_layouts",\
        "color_code",\
        "replace_values"\
      ],\
      "display_label": "Industry",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000000002613",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Industry",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [\
        {\
          "display_value": "-None-",\
          "sequence_number": 1,\
          "reference_value": "-None-",\
          "colour_code": null,\
          "actual_value": "-None-",\
          "id": "5725767000000003431",\
          "type": "used"\
        },\
        {\
          "display_value": "ASP (Application Service Provider)",\
          "sequence_number": 2,\
          "reference_value": "ASP (Application Service Provider)",\
          "colour_code": null,\
          "actual_value": "ASP (Application Service Provider)",\
          "id": "5725767000000299019",\
          "type": "used"\
        },\
        {\
          "display_value": "Data/Telecom OEM",\
          "sequence_number": 3,\
          "reference_value": "Data/Telecom OEM",\
          "colour_code": null,\
          "actual_value": "Data/Telecom OEM",\
          "id": "5725767000000003415",\
          "type": "used"\
        },\
        {\
          "display_value": "ERP (Enterprise Resource Planning)",\
          "sequence_number": 4,\
          "reference_value": "ERP (Enterprise Resource Planning)",\
          "colour_code": null,\
          "actual_value": "ERP (Enterprise Resource Planning)",\
          "id": "5725767000000299021",\
          "type": "used"\
        },\
        {\
          "display_value": "Government/Military",\
          "sequence_number": 5,\
          "reference_value": "Government/Military",\
          "colour_code": null,\
          "actual_value": "Government/Military",\
          "id": "5725767000000003429",\
          "type": "used"\
        },\
        {\
          "display_value": "Large Enterprise",\
          "sequence_number": 6,\
          "reference_value": "Large Enterprise",\
          "colour_code": null,\
          "actual_value": "Large Enterprise",\
          "id": "5725767000000003421",\
          "type": "used"\
        },\
        {\
          "display_value": "ManagementISV",\
          "sequence_number": 7,\
          "reference_value": "ManagementISV",\
          "colour_code": null,\
          "actual_value": "ManagementISV",\
          "id": "5725767000000003417",\
          "type": "used"\
        },\
        {\
          "display_value": "MSP (Management Service Provider)",\
          "sequence_number": 8,\
          "reference_value": "MSP (Management Service Provider)",\
          "colour_code": null,\
          "actual_value": "MSP (Management Service Provider)",\
          "id": "5725767000000003435",\
          "type": "used"\
        },\
        {\
          "display_value": "Network Equipment Enterprise",\
          "sequence_number": 9,\
          "reference_value": "Network Equipment Enterprise",\
          "colour_code": null,\
          "actual_value": "Network Equipment (Enterprise)",\
          "id": "5725767000000003427",\
          "type": "used"\
        },\
        {\
          "display_value": "Non-management ISV",\
          "sequence_number": 10,\
          "reference_value": "Non-management ISV",\
          "colour_code": null,\
          "actual_value": "Non-management ISV",\
          "id": "5725767000000003433",\
          "type": "used"\
        },\
        {\
          "display_value": "Optical Networking",\
          "sequence_number": 11,\
          "reference_value": "Optical Networking",\
          "colour_code": null,\
          "actual_value": "Optical Networking",\
          "id": "5725767000000003445",\
          "type": "used"\
        },\
        {\
          "display_value": "Service Provider",\
          "sequence_number": 12,\
          "reference_value": "Service Provider",\
          "colour_code": null,\
          "actual_value": "Service Provider",\
          "id": "5725767000000003419",\
          "type": "used"\
        },\
        {\
          "display_value": "Small/Medium Enterprise",\
          "sequence_number": 13,\
          "reference_value": "Small/Medium Enterprise",\
          "colour_code": null,\
          "actual_value": "Small/Medium Enterprise",\
          "id": "5725767000000003425",\
          "type": "used"\
        },\
        {\
          "display_value": "Storage Equipment",\
          "sequence_number": 14,\
          "reference_value": "Storage Equipment",\
          "colour_code": null,\
          "actual_value": "Storage Equipment",\
          "id": "5725767000000003437",\
          "type": "used"\
        },\
        {\
          "display_value": "Storage Service Provider",\
          "sequence_number": 15,\
          "reference_value": "Storage Service Provider",\
          "colour_code": null,\
          "actual_value": "Storage Service Provider",\
          "id": "5725767000000003443",\
          "type": "used"\
        },\
        {\
          "display_value": "Systems Integrator",\
          "sequence_number": 16,\
          "reference_value": "Systems Integrator",\
          "colour_code": null,\
          "actual_value": "Systems Integrator",\
          "id": "5725767000000003413",\
          "type": "used"\
        },\
        {\
          "display_value": "Wireless Industry",\
          "sequence_number": 17,\
          "reference_value": "Wireless Industry",\
          "colour_code": null,\
          "actual_value": "Wireless Industry",\
          "id": "5725767000000003423",\
          "type": "used"\
        },\
        {\
          "display_value": "ERP",\
          "sequence_number": 18,\
          "reference_value": "ERP",\
          "colour_code": null,\
          "actual_value": "ERP",\
          "id": "5725767000000420476",\
          "type": "used"\
        },\
        {\
          "display_value": "Management ISV",\
          "sequence_number": 19,\
          "reference_value": "Management ISV",\
          "colour_code": null,\
          "actual_value": "Management ISV",\
          "id": "5725767000000420478",\
          "type": "used"\
        }\
      ],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 2,\
      "modified_time": "2023-04-12T02:09:44-07:00",\
      "email_parser": {\
        "fields_update_supported": true,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": "Industry"\
      },\
      "rollup_summary": {},\
      "length": 120,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "picklist",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": true,\
      "blueprint_supported": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "No. of Employees",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "unique",\
        "removal",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "add_to_other_layouts",\
        "number_separator"\
      ],\
      "display_label": "No of Employees",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000000002615",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "No_of_Employees",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "integer",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 32,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": true,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": "Employees"\
      },\
      "rollup_summary": {},\
      "length": 9,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "integer",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": true,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Annual Revenue",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "max_length_digits",\
        "removal",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "add_to_other_layouts",\
        "rounding_type",\
        "maximum_decimal"\
      ],\
      "display_label": "Annual Revenue",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000000002617",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Annual_Revenue",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "double",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 36,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": true,\
        "record_operations_supported": true\
      },\
      "currency": {\
        "rounding_option": "normal",\
        "precision": 2\
      },\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": "Annual_Revenue"\
      },\
      "rollup_summary": {},\
      "length": 16,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "currency",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": 2,\
      "mass_update": true,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Rating",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "removal",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "history_tracking",\
        "display_value_alphabetically",\
        "default_value",\
        "option_add",\
        "add_to_other_layouts",\
        "color_code",\
        "replace_values"\
      ],\
      "display_label": "Rating",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000000002619",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Rating",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [\
        {\
          "display_value": "-None-",\
          "sequence_number": 1,\
          "reference_value": "-None-",\
          "colour_code": null,\
          "actual_value": "-None-",\
          "id": "5725767000000003219",\
          "type": "used"\
        },\
        {\
          "display_value": "Acquired",\
          "sequence_number": 2,\
          "reference_value": "Acquired",\
          "colour_code": null,\
          "actual_value": "Acquired",\
          "id": "5725767000000003221",\
          "type": "used"\
        },\
        {\
          "display_value": "Active",\
          "sequence_number": 3,\
          "reference_value": "Active",\
          "colour_code": null,\
          "actual_value": "Active",\
          "id": "5725767000000003223",\
          "type": "used"\
        },\
        {\
          "display_value": "Market Failed",\
          "sequence_number": 4,\
          "reference_value": "Market Failed",\
          "colour_code": null,\
          "actual_value": "Market Failed",\
          "id": "5725767000000003225",\
          "type": "used"\
        },\
        {\
          "display_value": "Project Cancelled",\
          "sequence_number": 5,\
          "reference_value": "Project Cancelled",\
          "colour_code": null,\
          "actual_value": "Project Cancelled",\
          "id": "5725767000000003227",\
          "type": "used"\
        },\
        {\
          "display_value": "Shut Down",\
          "sequence_number": 6,\
          "reference_value": "Shut Down",\
          "colour_code": null,\
          "actual_value": "ShutDown",\
          "id": "5725767000000003229",\
          "type": "used"\
        }\
      ],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 2,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": true,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": "Rating"\
      },\
      "rollup_summary": {},\
      "length": 120,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "picklist",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": true,\
      "blueprint_supported": true,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": false,\
        "api_create": false,\
        "web_create": false,\
        "api_update": false\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Created By",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "removal",\
        "add_to_other_layouts"\
      ],\
      "display_label": "Created By",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000000002623",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": false,\
        "quick_create": false,\
        "create": false\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Created_By",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "jsonobject",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 20,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 120,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "ownerlookup",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": false,\
        "api_create": false,\
        "web_create": false,\
        "api_update": false\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Modified By",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "removal",\
        "add_to_other_layouts"\
      ],\
      "display_label": "Modified By",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000000002625",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": false,\
        "quick_create": false,\
        "create": false\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Modified_By",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "jsonobject",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 20,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 120,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "ownerlookup",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": false,\
        "api_create": false,\
        "web_create": false,\
        "api_update": false\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Created Time",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": null,\
      "display_label": "Created Time",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": false,\
      "multi_module_lookup": {},\
      "id": "5725767000000002627",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": false,\
        "quick_create": false,\
        "create": false\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Created_Time",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 200,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 120,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "datetime",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": false,\
        "api_create": false,\
        "web_create": false,\
        "api_update": false\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Modified Time",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": null,\
      "display_label": "Modified Time",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": false,\
      "multi_module_lookup": {},\
      "id": "5725767000000002629",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": false,\
        "quick_create": false,\
        "create": false\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Modified_Time",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 200,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 120,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "datetime",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": false,\
      "operation_type": {\
        "web_update": false,\
        "api_create": false,\
        "web_create": false,\
        "api_update": false\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Full Name",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": null,\
      "display_label": "Full Name",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": false,\
      "multi_module_lookup": {},\
      "id": "5725767000000002631",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": false,\
        "quick_create": false,\
        "create": false\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Full_Name",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 1,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": true,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 120,\
      "display_field": true,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "text",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Street",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "unique",\
        "removal",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "add_to_other_layouts"\
      ],\
      "display_label": "Street",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000000002635",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Street",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 1,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": true,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": "Mailing_Street",\
        "Deals": null,\
        "Accounts": "Billing_Street"\
      },\
      "rollup_summary": {},\
      "length": 250,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "text",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": true,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "City",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "unique",\
        "removal",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "add_to_other_layouts"\
      ],\
      "display_label": "City",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000000002637",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "City",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 1,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": true,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": "Mailing_City",\
        "Deals": null,\
        "Accounts": "Billing_City"\
      },\
      "rollup_summary": {},\
      "length": 100,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "text",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": true,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "State",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "unique",\
        "removal",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "add_to_other_layouts"\
      ],\
      "display_label": "State",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000000002639",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "State",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 1,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": true,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": "Mailing_State",\
        "Deals": null,\
        "Accounts": "Billing_State"\
      },\
      "rollup_summary": {},\
      "length": 100,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "text",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": true,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Zip Code",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "unique",\
        "removal",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "add_to_other_layouts"\
      ],\
      "display_label": "Zip Code",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000000002641",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Zip_Code",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 1,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": true,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": "Mailing_Zip",\
        "Deals": null,\
        "Accounts": "Billing_Code"\
      },\
      "rollup_summary": {},\
      "length": 30,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "text",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": true,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Country",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "unique",\
        "removal",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "add_to_other_layouts"\
      ],\
      "display_label": "Country",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000000002643",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Country",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 1,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": true,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": "Mailing_Country",\
        "Deals": null,\
        "Accounts": "Billing_Country"\
      },\
      "rollup_summary": {},\
      "length": 100,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "text",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": true,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Description",\
      "tooltip": null,\
      "textarea": {\
        "type": "large"\
      },\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "removal",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "add_to_other_layouts"\
      ],\
      "display_label": "Description",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000000002645",\
      "created_time": null,\
      "filterable": false,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Description",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 3,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": "Description",\
        "Deals": "Description",\
        "Accounts": "Description"\
      },\
      "rollup_summary": {},\
      "length": 32000,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": false,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "textarea",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Skype ID",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "unique",\
        "removal",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "add_to_other_layouts"\
      ],\
      "display_label": "Skype ID",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000000014173",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Skype_ID",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 37,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": "Skype_ID",\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 50,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "text",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": true,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Email Opt Out",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "removal",\
        "tooltip",\
        "default_value",\
        "add_to_other_layouts"\
      ],\
      "display_label": "Email Opt Out",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000000014177",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Email_Opt_Out",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "boolean",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 301,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": true,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 5,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "boolean",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": true,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Salutation",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "removal",\
        "hipaa_field",\
        "display_value_alphabetically",\
        "default_value",\
        "option_add",\
        "add_to_other_layouts",\
        "replace_values"\
      ],\
      "display_label": "Salutation",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": false,\
      "multi_module_lookup": {},\
      "id": "5725767000000022011",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Salutation",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [\
        {\
          "display_value": "-None-",\
          "sequence_number": 1,\
          "reference_value": "-None-",\
          "colour_code": null,\
          "actual_value": "-None-",\
          "id": "5725767000000022051",\
          "type": "used"\
        },\
        {\
          "display_value": "Mr.",\
          "sequence_number": 2,\
          "reference_value": "Mr.",\
          "colour_code": null,\
          "actual_value": "Mr.",\
          "id": "5725767000000022072",\
          "type": "used"\
        },\
        {\
          "display_value": "Mrs.",\
          "sequence_number": 3,\
          "reference_value": "Mrs.",\
          "colour_code": null,\
          "actual_value": "Mrs.",\
          "id": "5725767000000022088",\
          "type": "used"\
        },\
        {\
          "display_value": "Ms.",\
          "sequence_number": 4,\
          "reference_value": "Ms.",\
          "colour_code": null,\
          "actual_value": "Ms.",\
          "id": "5725767000000022041",\
          "type": "used"\
        },\
        {\
          "display_value": "Dr.",\
          "sequence_number": 5,\
          "reference_value": "Dr.",\
          "colour_code": null,\
          "actual_value": "Dr.",\
          "id": "5725767000000022063",\
          "type": "used"\
        },\
        {\
          "display_value": "Prof.",\
          "sequence_number": 6,\
          "reference_value": "Prof.",\
          "colour_code": null,\
          "actual_value": "Prof.",\
          "id": "5725767000000022038",\
          "type": "used"\
        }\
      ],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 2,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": true,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 25,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "picklist",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": true,\
      "blueprint_supported": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Secondary Email",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "unique",\
        "removal",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "add_to_other_layouts"\
      ],\
      "display_label": "Secondary Email",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000000044003",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Secondary_Email",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 25,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": "Secondary_Email",\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 100,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "email",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": false,\
        "api_create": false,\
        "web_create": false,\
        "api_update": false\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Last Activity Time",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": true,\
      "customizable_properties": [\
        "fixed_position",\
        "tooltip"\
      ],\
      "display_label": "Last Activity Time",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": false,\
      "multi_module_lookup": {},\
      "id": "5725767000000052001",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": false,\
        "quick_create": false,\
        "create": false\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Last_Activity_Time",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 786,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 120,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "datetime",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Twitter",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "unique",\
        "removal",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "add_to_other_layouts"\
      ],\
      "display_label": "Twitter",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000000053001",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Twitter",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 22,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": "Twitter",\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 50,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "text",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Layout",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": null,\
      "display_label": "Layout",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000000095031",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Layout",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "jsonobject",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 208,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 50,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": false,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "layout",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": true,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Tag",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "unique",\
        "removal",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "add_to_other_layouts"\
      ],\
      "display_label": "Tag",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": false,\
      "multi_module_lookup": {},\
      "id": "5725767000000125055",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": false,\
        "quick_create": false,\
        "create": false\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Tag",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "jsonarray",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 209,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 2000,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": false,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "text",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": false,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Lead Image",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "image_enable",\
        "add_to_other_layouts"\
      ],\
      "display_label": "Record Image",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": false,\
      "multi_module_lookup": {},\
      "id": "5725767000000152001",\
      "created_time": null,\
      "filterable": false,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": false,\
      "external": null,\
      "api_name": "Record_Image",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 66,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 255,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": false,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "profileimage",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": false,\
      "operation_type": {\
        "web_update": false,\
        "api_create": false,\
        "web_create": false,\
        "api_update": false\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Converted Date Time",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": null,\
      "display_label": "Converted Date Time",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": false,\
      "multi_module_lookup": {},\
      "id": "5725767000000225696",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": false,\
        "edit": false,\
        "quick_create": false,\
        "create": false\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Converted_Date_Time",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 333,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": true,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 120,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "datetime",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": false,\
        "api_create": false,\
        "web_create": false,\
        "api_update": false\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Lead Conversion Time",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": true,\
      "customizable_properties": null,\
      "display_label": "Lead Conversion Time",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": false,\
      "multi_module_lookup": {},\
      "id": "5725767000000280013",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": false,\
        "quick_create": false,\
        "create": false\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Lead_Conversion_Time",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "integer",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 32,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 9,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "integer",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": false,\
        "api_create": false,\
        "web_create": false,\
        "api_update": false\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Unsubscribed Mode",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": true,\
      "customizable_properties": null,\
      "display_label": "Unsubscribed Mode",\
      "read_only": true,\
      "association_details": null,\
      "businesscard_supported": false,\
      "multi_module_lookup": {},\
      "id": "5725767000000283001",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_only",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_only",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_only",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Unsubscribed_Mode",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [\
        {\
          "display_value": "Consent form",\
          "sequence_number": 4,\
          "reference_value": "Consent form",\
          "colour_code": null,\
          "actual_value": "Consent form",\
          "id": "5725767000000283016",\
          "type": "used"\
        },\
        {\
          "display_value": "Manual",\
          "sequence_number": 2,\
          "reference_value": "Manual",\
          "colour_code": null,\
          "actual_value": "Manual",\
          "id": "5725767000000283020",\
          "type": "used"\
        },\
        {\
          "display_value": "Unsubscribe link",\
          "sequence_number": 1,\
          "reference_value": "Unsubscribe link",\
          "colour_code": null,\
          "actual_value": "Unsubscribe link",\
          "id": "5725767000000283014",\
          "type": "used"\
        },\
        {\
          "display_value": "Zoho campaigns",\
          "sequence_number": 3,\
          "reference_value": "Zoho campaigns",\
          "colour_code": null,\
          "actual_value": "Zoho campaigns",\
          "id": "5725767000000283018",\
          "type": "used"\
        }\
      ],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 2,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 120,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": true,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "picklist",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "blueprint_supported": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": false,\
        "api_create": false,\
        "web_create": false,\
        "api_update": false\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Unsubscribed Time",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": true,\
      "customizable_properties": null,\
      "display_label": "Unsubscribed Time",\
      "read_only": true,\
      "association_details": null,\
      "businesscard_supported": false,\
      "multi_module_lookup": {},\
      "id": "5725767000000283002",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_only",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_only",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_only",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Unsubscribed_Time",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 333,\
      "modified_time": "2024-10-24T10:13:01-07:00",\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 120,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "datetime",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": false,\
        "api_create": false,\
        "web_create": false,\
        "api_update": false\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Converted Account",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": true,\
      "customizable_properties": null,\
      "display_label": "Converted Account",\
      "read_only": true,\
      "association_details": null,\
      "businesscard_supported": false,\
      "multi_module_lookup": {},\
      "id": "5725767000000285001",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_only",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_only",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_only",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": false,\
        "quick_create": false,\
        "create": false\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Converted_Account",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "jsonobject",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 133,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {\
        "display_label": null,\
        "revalidate_filter_during_edit": false,\
        "api_name": null,\
        "module": {\
          "api_name": "Accounts",\
          "crypt": false,\
          "id": "5725767000000002177"\
        },\
        "id": null,\
        "query_details": {}\
      },\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 120,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "lookup",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": false,\
        "api_create": false,\
        "web_create": false,\
        "api_update": false\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Converted Contact",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": true,\
      "customizable_properties": null,\
      "display_label": "Converted Contact",\
      "read_only": true,\
      "association_details": null,\
      "businesscard_supported": false,\
      "multi_module_lookup": {},\
      "id": "5725767000000285003",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_only",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_only",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_only",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": false,\
        "quick_create": false,\
        "create": false\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Converted_Contact",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "jsonobject",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 133,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {\
        "display_label": null,\
        "revalidate_filter_during_edit": false,\
        "api_name": null,\
        "module": {\
          "api_name": "Contacts",\
          "crypt": false,\
          "id": "5725767000000002179"\
        },\
        "id": null,\
        "query_details": {}\
      },\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 120,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "lookup",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": false,\
        "api_create": false,\
        "web_create": false,\
        "api_update": false\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Converted Deal",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": true,\
      "customizable_properties": null,\
      "display_label": "Converted Deal",\
      "read_only": true,\
      "association_details": null,\
      "businesscard_supported": false,\
      "multi_module_lookup": {},\
      "id": "5725767000000285005",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_only",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_only",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_only",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": false,\
        "quick_create": false,\
        "create": false\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Converted_Deal",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "jsonobject",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 133,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {\
        "display_label": null,\
        "revalidate_filter_during_edit": false,\
        "api_name": null,\
        "module": {\
          "api_name": "Deals",\
          "crypt": false,\
          "id": "5725767000000002181"\
        },\
        "id": null,\
        "query_details": {}\
      },\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 120,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "lookup",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": false,\
      "operation_type": {\
        "web_update": true,\
        "api_create": false,\
        "web_create": false,\
        "api_update": false\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Territories",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": true,\
      "customizable_properties": null,\
      "display_label": "Territories",\
      "read_only": true,\
      "association_details": null,\
      "businesscard_supported": false,\
      "multi_module_lookup": {},\
      "id": "5725767000000295089",\
      "created_time": null,\
      "filterable": false,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_only",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_only",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_only",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": false,\
        "quick_create": false,\
        "create": false\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Territories",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "jsonarray",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 999,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 120,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": false,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "territories",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": false,\
        "api_create": false,\
        "web_create": false,\
        "api_update": false\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Record Id",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": true,\
      "customizable_properties": null,\
      "display_label": "Record Id",\
      "read_only": true,\
      "association_details": null,\
      "businesscard_supported": false,\
      "multi_module_lookup": {},\
      "id": "5725767000000298001",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_only",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_only",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_only",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": false,\
        "edit": false,\
        "quick_create": false,\
        "create": false\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "id",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 52,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 18,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "bigint",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": false,\
        "api_create": false,\
        "web_create": false,\
        "api_update": false\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Change Log Time",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": true,\
      "customizable_properties": null,\
      "display_label": "Change Log Time",\
      "read_only": true,\
      "association_details": null,\
      "businesscard_supported": false,\
      "multi_module_lookup": {},\
      "id": "5725767000000317011",\
      "created_time": null,\
      "filterable": false,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_only",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_only",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_only",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": false,\
        "edit": false,\
        "quick_create": false,\
        "create": false\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Change_Log_Time__s",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 333,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 120,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": false,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "datetime",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": false,\
      "operation_type": {\
        "web_update": false,\
        "api_create": false,\
        "web_create": false,\
        "api_update": false\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Is Converted",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": true,\
      "customizable_properties": null,\
      "display_label": "Is Converted",\
      "read_only": true,\
      "association_details": null,\
      "businesscard_supported": false,\
      "multi_module_lookup": {},\
      "id": "5725767000000323001",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_only",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_only",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_only",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": false,\
        "edit": false,\
        "quick_create": false,\
        "create": false\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Converted__s",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "boolean",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 301,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 5,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "boolean",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": false,\
      "operation_type": {\
        "web_update": false,\
        "api_create": false,\
        "web_create": false,\
        "api_update": false\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Locked",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": true,\
      "customizable_properties": null,\
      "display_label": "Locked",\
      "read_only": true,\
      "association_details": null,\
      "businesscard_supported": false,\
      "multi_module_lookup": {},\
      "id": "5725767000000375054",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_only",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_only",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_only",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": false,\
        "edit": false,\
        "quick_create": false,\
        "create": false\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Locked__s",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "boolean",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 301,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 5,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "boolean",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": false,\
      "operation_type": {\
        "web_update": false,\
        "api_create": false,\
        "web_create": false,\
        "api_update": false\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Last Enriched Time",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": true,\
      "customizable_properties": [\
        "fixed_position",\
        "tooltip"\
      ],\
      "display_label": "Last Enriched Time",\
      "read_only": true,\
      "association_details": null,\
      "businesscard_supported": false,\
      "multi_module_lookup": {},\
      "id": "5725767000000380009",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_only",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_only",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_only",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": false,\
        "edit": false,\
        "quick_create": false,\
        "create": false\
      },\
      "separator": false,\
      "searchable": false,\
      "external": null,\
      "api_name": "Last_Enriched_Time__s",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 333,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 120,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": false,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "datetime",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": false,\
      "operation_type": {\
        "web_update": false,\
        "api_create": false,\
        "web_create": false,\
        "api_update": false\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Enrich Status",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": true,\
      "customizable_properties": [\
        "mandatory",\
        "removal",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "history_tracking",\
        "display_value_alphabetically",\
        "default_value",\
        "option_add",\
        "add_to_other_layouts",\
        "color_code",\
        "replace_values"\
      ],\
      "display_label": "Enrich Status",\
      "read_only": true,\
      "association_details": null,\
      "businesscard_supported": false,\
      "multi_module_lookup": {},\
      "id": "5725767000000380012",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_only",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_only",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_only",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": false,\
        "edit": false,\
        "quick_create": false,\
        "create": false\
      },\
      "separator": false,\
      "searchable": false,\
      "external": null,\
      "api_name": "Enrich_Status__s",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [\
        {\
          "display_value": "Available",\
          "sequence_number": 1,\
          "reference_value": "Available",\
          "colour_code": null,\
          "actual_value": "Available",\
          "id": "5725767000000380039",\
          "type": "used"\
        },\
        {\
          "display_value": "Enriched",\
          "sequence_number": 2,\
          "reference_value": "Enriched",\
          "colour_code": null,\
          "actual_value": "Enriched",\
          "id": "5725767000000380041",\
          "type": "used"\
        },\
        {\
          "display_value": "Data not found",\
          "sequence_number": 3,\
          "reference_value": "Data not found",\
          "colour_code": null,\
          "actual_value": "Data not found",\
          "id": "5725767000000380043",\
          "type": "used"\
        }\
      ],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 2,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 120,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": false,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "picklist",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "blueprint_supported": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Wizard",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": null,\
      "display_label": "Wizard",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000000526321",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Wizard",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 207,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 50,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": false,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "bigint",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Most Recent Visit",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": true,\
      "customizable_properties": [\
        "fixed_position",\
        "private_field",\
        "hipaa_field"\
      ],\
      "display_label": "Last Visited Time",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000000930076",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": false,\
        "quick_create": false,\
        "create": false\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Last_Visited_Time",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 786,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 120,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "datetime",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "First Page Visited",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": true,\
      "customizable_properties": [\
        "fixed_position",\
        "private_field",\
        "hipaa_field"\
      ],\
      "display_label": "First Visited URL",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000000930077",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": false,\
        "quick_create": false,\
        "create": false\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "First_Visited_URL",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 21,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 3000,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "website",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Average Time Spent (Minutes)",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": true,\
      "customizable_properties": [\
        "fixed_position",\
        "private_field",\
        "hipaa_field",\
        "number_separator"\
      ],\
      "display_label": "Average Time Spent (Minutes)",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000000930078",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": false,\
        "quick_create": false,\
        "create": false\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Average_Time_Spent_Minutes",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "double",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 38,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 16,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "double",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": 2,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Number Of Chats",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": true,\
      "customizable_properties": [\
        "fixed_position",\
        "private_field",\
        "hipaa_field",\
        "number_separator"\
      ],\
      "display_label": "Number Of Chats",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000000930079",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": false,\
        "quick_create": false,\
        "create": false\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Number_Of_Chats",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "integer",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 32,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 9,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "integer",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Referrer",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": true,\
      "customizable_properties": [\
        "fixed_position",\
        "private_field",\
        "hipaa_field"\
      ],\
      "display_label": "Referrer",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000000930080",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": false,\
        "quick_create": false,\
        "create": false\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Referrer",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 21,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 3000,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "website",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Visitor Score",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": true,\
      "customizable_properties": [\
        "fixed_position",\
        "private_field",\
        "hipaa_field",\
        "number_separator"\
      ],\
      "display_label": "Visitor Score",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000000930081",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": false,\
        "quick_create": false,\
        "create": false\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Visitor_Score",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 52,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 19,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "bigint",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "First Visit",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": true,\
      "customizable_properties": [\
        "fixed_position",\
        "private_field",\
        "hipaa_field"\
      ],\
      "display_label": "First Visited Time",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000000930082",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": false,\
        "quick_create": false,\
        "create": false\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "First_Visited_Time",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 786,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 120,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "datetime",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Days Visited",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": true,\
      "customizable_properties": [\
        "fixed_position",\
        "private_field",\
        "hipaa_field",\
        "number_separator"\
      ],\
      "display_label": "Days Visited",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000000930083",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": false,\
        "quick_create": false,\
        "create": false\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Days_Visited",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "integer",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 32,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 9,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "integer",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": false,\
        "api_create": false,\
        "web_create": false,\
        "api_update": false\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Record Status",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": true,\
      "customizable_properties": null,\
      "display_label": "Record Status",\
      "read_only": true,\
      "association_details": null,\
      "businesscard_supported": false,\
      "multi_module_lookup": {},\
      "id": "5725767000001205009",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_only",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_only",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_only",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": false,\
        "edit": false,\
        "quick_create": false,\
        "create": false\
      },\
      "separator": false,\
      "searchable": false,\
      "external": null,\
      "api_name": "Record_Status__s",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [\
        {\
          "display_value": "Trash",\
          "sequence_number": 1,\
          "reference_value": "Trash",\
          "colour_code": null,\
          "actual_value": "Trash",\
          "id": "5725767000001205010",\
          "type": "used"\
        },\
        {\
          "display_value": "Available",\
          "sequence_number": 2,\
          "reference_value": "Available",\
          "colour_code": null,\
          "actual_value": "Available",\
          "id": "5725767000001205011",\
          "type": "used"\
        },\
        {\
          "display_value": "Draft",\
          "sequence_number": 3,\
          "reference_value": "Draft",\
          "colour_code": null,\
          "actual_value": "Draft",\
          "id": "5725767000001205012",\
          "type": "used"\
        }\
      ],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 2,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 120,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": false,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "picklist",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "blueprint_supported": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "checking multi picklist",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "fieldlabel",\
        "removal",\
        "deletion",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "display_value_alphabetically",\
        "default_value",\
        "option_add",\
        "add_to_other_layouts"\
      ],\
      "display_label": "checking multi picklist",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": false,\
      "multi_module_lookup": {},\
      "id": "5725767000001537002",\
      "created_time": "2023-11-26T02:48:07-08:00",\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "checking_multi_picklist",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [\
        {\
          "display_value": "test 1",\
          "sequence_number": 1,\
          "reference_value": "test 1",\
          "colour_code": null,\
          "actual_value": "test 1",\
          "id": "5725767000001537001",\
          "type": "used"\
        },\
        {\
          "display_value": "test 2",\
          "sequence_number": 2,\
          "reference_value": "test 2",\
          "colour_code": null,\
          "actual_value": "test 2",\
          "id": "5725767000001537003",\
          "type": "used"\
        }\
      ],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "jsonarray",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 100,\
      "modified_time": "2024-11-25T00:43:53-08:00",\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": true,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 1000,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "multiselectpicklist",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": true,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": false,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Data Source",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": null,\
      "display_label": "Data Source",\
      "read_only": true,\
      "association_details": null,\
      "businesscard_supported": false,\
      "multi_module_lookup": {},\
      "id": "5725767000001708003",\
      "created_time": null,\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": false,\
        "edit": false,\
        "quick_create": false,\
        "create": false\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Data_Source",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [\
        {\
          "display_value": "Manual",\
          "sequence_number": 1,\
          "reference_value": "Manual",\
          "colour_code": null,\
          "actual_value": "Manual",\
          "id": "5725767000001708009",\
          "type": "used"\
        },\
        {\
          "display_value": "API",\
          "sequence_number": 2,\
          "reference_value": "API",\
          "colour_code": null,\
          "actual_value": "API",\
          "id": "5725767000001708011",\
          "type": "used"\
        },\
        {\
          "display_value": "Manual (Mobile)",\
          "sequence_number": 3,\
          "reference_value": "Manual (Mobile)",\
          "colour_code": null,\
          "actual_value": "Manual (Mobile)",\
          "id": "5725767000001708013",\
          "type": "used"\
        },\
        {\
          "display_value": "Webform",\
          "sequence_number": 4,\
          "reference_value": "Webform",\
          "colour_code": null,\
          "actual_value": "Webform",\
          "id": "5725767000001708015",\
          "type": "used"\
        },\
        {\
          "display_value": "Microsoft Outlook",\
          "sequence_number": 5,\
          "reference_value": "Microsoft Outlook",\
          "colour_code": null,\
          "actual_value": "Microsoft Outlook",\
          "id": "5725767000001708017",\
          "type": "used"\
        },\
        {\
          "display_value": "Social",\
          "sequence_number": 6,\
          "reference_value": "Social",\
          "colour_code": null,\
          "actual_value": "Social",\
          "id": "5725767000001708019",\
          "type": "used"\
        },\
        {\
          "display_value": "Workflow",\
          "sequence_number": 7,\
          "reference_value": "Workflow",\
          "colour_code": null,\
          "actual_value": "Workflow",\
          "id": "5725767000001708021",\
          "type": "used"\
        },\
        {\
          "display_value": "Import",\
          "sequence_number": 8,\
          "reference_value": "Import",\
          "colour_code": null,\
          "actual_value": "Import",\
          "id": "5725767000001708023",\
          "type": "used"\
        },\
        {\
          "display_value": "Bulk API",\
          "sequence_number": 9,\
          "reference_value": "Bulk API",\
          "colour_code": null,\
          "actual_value": "Bulk Write",\
          "id": "5725767000001708025",\
          "type": "used"\
        },\
        {\
          "display_value": "Migration",\
          "sequence_number": 10,\
          "reference_value": "Migration",\
          "colour_code": null,\
          "actual_value": "Migration",\
          "id": "5725767000001708027",\
          "type": "used"\
        },\
        {\
          "display_value": "System Generated",\
          "sequence_number": 11,\
          "reference_value": "System Generated",\
          "colour_code": null,\
          "actual_value": "System Generated",\
          "id": "5725767000001708029",\
          "type": "used"\
        },\
        {\
          "display_value": "Google Calendar Sync",\
          "sequence_number": 12,\
          "reference_value": "Google Calendar Sync",\
          "colour_code": null,\
          "actual_value": "Google",\
          "id": "5725767000001708031",\
          "type": "used"\
        },\
        {\
          "display_value": "Office 365",\
          "sequence_number": 13,\
          "reference_value": "Office 365",\
          "colour_code": null,\
          "actual_value": "Microsoft",\
          "id": "5725767000001708033",\
          "type": "used"\
        },\
        {\
          "display_value": "Phonebridge API",\
          "sequence_number": 14,\
          "reference_value": "Phonebridge API",\
          "colour_code": null,\
          "actual_value": "Phonebridge API",\
          "id": "5725767000001708035",\
          "type": "used"\
        },\
        {\
          "display_value": "Zoho Docs",\
          "sequence_number": 15,\
          "reference_value": "Zoho Docs",\
          "colour_code": null,\
          "actual_value": "Zoho Docs",\
          "id": "5725767000001708037",\
          "type": "used"\
        },\
        {\
          "display_value": "Manual Mass Add",\
          "sequence_number": 16,\
          "reference_value": "Manual Mass Add",\
          "colour_code": null,\
          "actual_value": "Manual Mass Add",\
          "id": "5725767000001708039",\
          "type": "used"\
        },\
        {\
          "display_value": "Sandbox",\
          "sequence_number": 17,\
          "reference_value": "Sandbox",\
          "colour_code": null,\
          "actual_value": "Sandbox",\
          "id": "5725767000001708041",\
          "type": "used"\
        },\
        {\
          "display_value": "Mail Parser",\
          "sequence_number": 18,\
          "reference_value": "Mail Parser",\
          "colour_code": null,\
          "actual_value": "Mail Parser",\
          "id": "5725767000001708043",\
          "type": "used"\
        },\
        {\
          "display_value": "SalesInbox",\
          "sequence_number": 19,\
          "reference_value": "SalesInbox",\
          "colour_code": null,\
          "actual_value": "SalesInbox",\
          "id": "5725767000001708045",\
          "type": "used"\
        },\
        {\
          "display_value": "Email Workflow",\
          "sequence_number": 20,\
          "reference_value": "Email Workflow",\
          "colour_code": null,\
          "actual_value": "Email workflow",\
          "id": "5725767000001708047",\
          "type": "used"\
        },\
        {\
          "display_value": "BCC Dropbox",\
          "sequence_number": 21,\
          "reference_value": "BCC Dropbox",\
          "colour_code": null,\
          "actual_value": "BCC Dropbox",\
          "id": "5725767000001708049",\
          "type": "used"\
        },\
        {\
          "display_value": "Zoho Finance Suite",\
          "sequence_number": 22,\
          "reference_value": "Zoho Finance Suite",\
          "colour_code": null,\
          "actual_value": "Zoho Finance Suite",\
          "id": "5725767000001708051",\
          "type": "used"\
        },\
        {\
          "display_value": "Zoho Desk",\
          "sequence_number": 23,\
          "reference_value": "Zoho Desk",\
          "colour_code": null,\
          "actual_value": "Zoho Desk",\
          "id": "5725767000001708053",\
          "type": "used"\
        },\
        {\
          "display_value": "Zoho Survey",\
          "sequence_number": 24,\
          "reference_value": "Zoho Survey",\
          "colour_code": null,\
          "actual_value": "Zoho Survey",\
          "id": "5725767000001708055",\
          "type": "used"\
        },\
        {\
          "display_value": "Google Ads",\
          "sequence_number": 25,\
          "reference_value": "Google Ads",\
          "colour_code": null,\
          "actual_value": "Google Adwords",\
          "id": "5725767000001708057",\
          "type": "used"\
        },\
        {\
          "display_value": "Zoho SalesIQ",\
          "sequence_number": 26,\
          "reference_value": "Zoho SalesIQ",\
          "colour_code": null,\
          "actual_value": "SalesIQ",\
          "id": "5725767000001708059",\
          "type": "used"\
        },\
        {\
          "display_value": "Zoho Mail",\
          "sequence_number": 27,\
          "reference_value": "Zoho Mail",\
          "colour_code": null,\
          "actual_value": "Zoho Mail",\
          "id": "5725767000001708061",\
          "type": "used"\
        },\
        {\
          "display_value": "Zoho Forms",\
          "sequence_number": 28,\
          "reference_value": "Zoho Forms",\
          "colour_code": null,\
          "actual_value": "Zoho Forms",\
          "id": "5725767000001708063",\
          "type": "used"\
        },\
        {\
          "display_value": "Custom Function",\
          "sequence_number": 29,\
          "reference_value": "Custom Function",\
          "colour_code": null,\
          "actual_value": "Custom Function",\
          "id": "5725767000001708065",\
          "type": "used"\
        },\
        {\
          "display_value": "Zoho Recruit",\
          "sequence_number": 30,\
          "reference_value": "Zoho Recruit",\
          "colour_code": null,\
          "actual_value": "Zoho Recruit",\
          "id": "5725767000001708067",\
          "type": "used"\
        },\
        {\
          "display_value": "Zoho Sheet View",\
          "sequence_number": 31,\
          "reference_value": "Zoho Sheet View",\
          "colour_code": null,\
          "actual_value": "Zoho Sheet View",\
          "id": "5725767000001708069",\
          "type": "used"\
        },\
        {\
          "display_value": "Sample Data",\
          "sequence_number": 32,\
          "reference_value": "Sample Data",\
          "colour_code": null,\
          "actual_value": "Sample Data",\
          "id": "5725767000001708071",\
          "type": "used"\
        },\
        {\
          "display_value": "Conversational AI ( Zia Voice )",\
          "sequence_number": 33,\
          "reference_value": "Conversational AI ( Zia Voice )",\
          "colour_code": null,\
          "actual_value": "Zia Voice",\
          "id": "5725767000001708073",\
          "type": "used"\
        },\
        {\
          "display_value": "Prediction",\
          "sequence_number": 34,\
          "reference_value": "Prediction",\
          "colour_code": null,\
          "actual_value": "Prediction",\
          "id": "5725767000001708075",\
          "type": "used"\
        },\
        {\
          "display_value": "Zoho Campaigns",\
          "sequence_number": 35,\
          "reference_value": "Zoho Campaigns",\
          "colour_code": null,\
          "actual_value": "Zoho Campaign",\
          "id": "5725767000001708077",\
          "type": "used"\
        },\
        {\
          "display_value": "Zoho Webinar",\
          "sequence_number": 36,\
          "reference_value": "Zoho Webinar",\
          "colour_code": null,\
          "actual_value": "Zoho Webinar",\
          "id": "5725767000001708079",\
          "type": "used"\
        },\
        {\
          "display_value": "Zoho Backstage",\
          "sequence_number": 37,\
          "reference_value": "Zoho Backstage",\
          "colour_code": null,\
          "actual_value": "Zoho Backstage",\
          "id": "5725767000001708081",\
          "type": "used"\
        },\
        {\
          "display_value": "Blueprint",\
          "sequence_number": 38,\
          "reference_value": "Blueprint",\
          "colour_code": null,\
          "actual_value": "Blueprint",\
          "id": "5725767000001708083",\
          "type": "used"\
        },\
        {\
          "display_value": "Approval process",\
          "sequence_number": 39,\
          "reference_value": "Approval process",\
          "colour_code": null,\
          "actual_value": "ApprovalProcess",\
          "id": "5725767000001708085",\
          "type": "used"\
        },\
        {\
          "display_value": "Macro",\
          "sequence_number": 40,\
          "reference_value": "Macro",\
          "colour_code": null,\
          "actual_value": "Macro",\
          "id": "5725767000001708087",\
          "type": "used"\
        },\
        {\
          "display_value": "Mass Transfer",\
          "sequence_number": 41,\
          "reference_value": "Mass Transfer",\
          "colour_code": null,\
          "actual_value": "Mass Transfer",\
          "id": "5725767000001708089",\
          "type": "used"\
        },\
        {\
          "display_value": "Change Owner",\
          "sequence_number": 42,\
          "reference_value": "Change Owner",\
          "colour_code": null,\
          "actual_value": "Change Owner",\
          "id": "5725767000001708091",\
          "type": "used"\
        },\
        {\
          "display_value": "Mass Update",\
          "sequence_number": 43,\
          "reference_value": "Mass Update",\
          "colour_code": null,\
          "actual_value": "Mass Update",\
          "id": "5725767000001708093",\
          "type": "used"\
        },\
        {\
          "display_value": "Deduplication",\
          "sequence_number": 44,\
          "reference_value": "Deduplication",\
          "colour_code": null,\
          "actual_value": "DeDuplicate",\
          "id": "5725767000001708095",\
          "type": "used"\
        },\
        {\
          "display_value": "Manual-Merge",\
          "sequence_number": 45,\
          "reference_value": "Manual-Merge",\
          "colour_code": null,\
          "actual_value": "Find And Merge",\
          "id": "5725767000001708097",\
          "type": "used"\
        },\
        {\
          "display_value": "Bigin",\
          "sequence_number": 46,\
          "reference_value": "Bigin",\
          "colour_code": null,\
          "actual_value": "Bigin",\
          "id": "5725767000001708099",\
          "type": "used"\
        },\
        {\
          "display_value": "Zoho CRM",\
          "sequence_number": 47,\
          "reference_value": "Zoho CRM",\
          "colour_code": null,\
          "actual_value": "Zoho CRM",\
          "id": "5725767000001708101",\
          "type": "used"\
        },\
        {\
          "display_value": "Mailchimp",\
          "sequence_number": 48,\
          "reference_value": "Mailchimp",\
          "colour_code": null,\
          "actual_value": "Mailchimp",\
          "id": "5725767000001708103",\
          "type": "used"\
        },\
        {\
          "display_value": "Constant Contact",\
          "sequence_number": 49,\
          "reference_value": "Constant Contact",\
          "colour_code": null,\
          "actual_value": "Constant Contact",\
          "id": "5725767000001708105",\
          "type": "used"\
        },\
        {\
          "display_value": "EmailIn",\
          "sequence_number": 50,\
          "reference_value": "EmailIn",\
          "colour_code": null,\
          "actual_value": "EmailIn",\
          "id": "5725767000001708107",\
          "type": "used"\
        },\
        {\
          "display_value": "Kiosk",\
          "sequence_number": 51,\
          "reference_value": "Kiosk",\
          "colour_code": null,\
          "actual_value": "Kiosk",\
          "id": "5725767000001708109",\
          "type": "used"\
        }\
      ],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 2,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": true,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": false,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 120,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "Zoho",\
          "name": "Zoho",\
          "id": "5725767000000526001"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "picklist",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "blueprint_supported": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Product Interest",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "fieldlabel",\
        "removal",\
        "deletion",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "history_tracking",\
        "display_value_alphabetically",\
        "default_value",\
        "option_add",\
        "add_to_other_layouts",\
        "color_code",\
        "replace_values"\
      ],\
      "display_label": "Product Interest",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000002005007",\
      "created_time": "2024-01-20T10:20:31-08:00",\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Product_Interest",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [\
        {\
          "display_value": "-None-",\
          "sequence_number": 1,\
          "reference_value": "-None-",\
          "colour_code": null,\
          "actual_value": "-None-",\
          "id": "5725767000002005011",\
          "type": "used"\
        },\
        {\
          "display_value": "Interested",\
          "sequence_number": 2,\
          "reference_value": "Interested",\
          "colour_code": null,\
          "actual_value": "Interested",\
          "id": "5725767000002005006",\
          "type": "used"\
        },\
        {\
          "display_value": "Not Interested",\
          "sequence_number": 3,\
          "reference_value": "Not Interested",\
          "colour_code": null,\
          "actual_value": "Not Interested",\
          "id": "5725767000002005008",\
          "type": "used"\
        }\
      ],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 2,\
      "modified_time": "2024-09-23T05:38:13-07:00",\
      "email_parser": {\
        "fields_update_supported": true,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": true,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 120,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": true,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "picklist",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": true,\
      "blueprint_supported": true,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": {\
        "module": "Project_Details",\
        "id": "5725767000002102023"\
      },\
      "webhook": false,\
      "operation_type": {\
        "web_update": false,\
        "api_create": false,\
        "web_create": false,\
        "api_update": false\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Project Details",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": null,\
      "display_label": "Project Details",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": false,\
      "multi_module_lookup": {},\
      "id": "5725767000002102135",\
      "created_time": null,\
      "filterable": false,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": false,\
      "external": null,\
      "api_name": "Project_Details",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": true,\
      "json_type": "jsonarray",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 500,\
      "modified_time": "2024-03-12T02:39:14-07:00",\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": true,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": false,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        },\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "subform",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "multiline",\
      "tooltip": null,\
      "textarea": {\
        "type": "small"\
      },\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "fieldlabel",\
        "encrypted",\
        "removal",\
        "deletion",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "add_to_other_layouts"\
      ],\
      "display_label": "multiline",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": false,\
      "multi_module_lookup": {},\
      "id": "5725767000002214001",\
      "created_time": "2024-02-20T04:27:11-08:00",\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "multiline",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 110,\
      "modified_time": "2024-11-25T00:43:54-08:00",\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": true,\
      "lookup": {},\
      "hipaa_compliance": {\
        "restricted_in_export": false,\
        "restricted": false\
      },\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 2000,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": false,\
      "layout_associations": [\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "textarea",\
      "formula": {},\
      "hipaa_compliance_enabled": true,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "largemultiline",\
      "tooltip": null,\
      "textarea": {\
        "type": "large"\
      },\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "fieldlabel",\
        "encrypted",\
        "removal",\
        "deletion",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "add_to_other_layouts"\
      ],\
      "display_label": "largemultiline",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": false,\
      "multi_module_lookup": {},\
      "id": "5725767000002214014",\
      "created_time": "2024-02-20T04:40:57-08:00",\
      "filterable": false,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "largemultiline",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 3,\
      "modified_time": "2024-11-25T00:43:54-08:00",\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": true,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 32000,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": false,\
      "layout_associations": [\
        {\
          "api_name": "testing_layout",\
          "name": "testing layout",\
          "id": "5725767000002256035"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "textarea",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": false,\
        "api_create": false,\
        "web_create": false,\
        "api_update": false\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Score1",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": true,\
      "customizable_properties": [\
        "fieldlabel",\
        "removal",\
        "deletion",\
        "private_field",\
        "hipaa_field",\
        "add_to_other_layouts",\
        "number_separator"\
      ],\
      "display_label": "Score1",\
      "read_only": true,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000002324011",\
      "created_time": "2024-03-04T23:32:08-08:00",\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_only",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_only",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_only",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": false,\
        "quick_create": false,\
        "create": false\
      },\
      "separator": true,\
      "searchable": true,\
      "external": null,\
      "api_name": "Score1",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "integer",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 32,\
      "modified_time": "2024-03-04T23:32:08-08:00",\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": true,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 5,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "integer",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Percent",\
      "tooltip": {\
        "name": "static_text",\
        "value": "Your marks"\
      },\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "fieldlabel",\
        "removal",\
        "deletion",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "add_to_other_layouts"\
      ],\
      "display_label": "Percent",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000002467002",\
      "created_time": "2024-03-26T03:00:10-07:00",\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Percent",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "double",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 34,\
      "modified_time": "2024-03-26T03:00:10-07:00",\
      "email_parser": {\
        "fields_update_supported": true,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": true,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 5,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "percent",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": 2,\
      "mass_update": true,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Name",\
      "tooltip": {\
        "name": "static_text",\
        "value": "Enter your name"\
      },\
      "textarea": {\
        "type": "rich_text"\
      },\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "fieldlabel",\
        "encrypted",\
        "removal",\
        "deletion",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "add_to_other_layouts"\
      ],\
      "display_label": "Name",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000002502003",\
      "created_time": "2024-04-01T23:36:37-07:00",\
      "filterable": false,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Name1",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 250,\
      "modified_time": "2024-04-01T23:36:37-07:00",\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": true,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 50000,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": false,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "textarea",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "RTF",\
      "tooltip": null,\
      "textarea": {\
        "type": "rich_text"\
      },\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "fieldlabel",\
        "encrypted",\
        "removal",\
        "deletion",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "add_to_other_layouts"\
      ],\
      "display_label": "RTF",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000002526070",\
      "created_time": "2024-04-04T06:42:52-07:00",\
      "filterable": false,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Testing_rich",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 250,\
      "modified_time": "2024-04-04T07:08:00-07:00",\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": true,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 50000,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": false,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "textarea",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": {\
        "module": "File_Upload_4__s",\
        "id": "5725767000002847086"\
      },\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "File Upload",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "fieldlabel",\
        "removal",\
        "deletion",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "add_to_other_layouts",\
        "upload_multiple_files"\
      ],\
      "display_label": "File Upload",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": false,\
      "multi_module_lookup": {},\
      "id": "5725767000002847088",\
      "created_time": "2024-05-23T23:26:58-07:00",\
      "filterable": false,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "File_Upload",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "jsonarray",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 555,\
      "modified_time": "2024-05-23T23:26:58-07:00",\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": true,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 1,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": false,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "fileupload",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": {\
        "module": "Image_Upload_3__s",\
        "id": "5725767000002847114"\
      },\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Image Upload",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "fieldlabel",\
        "max_length_digits",\
        "removal",\
        "deletion",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "add_to_other_layouts"\
      ],\
      "display_label": "Image Upload",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": false,\
      "multi_module_lookup": {},\
      "id": "5725767000002847116",\
      "created_time": "2024-05-23T23:29:34-07:00",\
      "filterable": false,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Image_Upload",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "jsonarray",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 556,\
      "modified_time": "2024-05-23T23:29:34-07:00",\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": true,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 10,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": false,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "imageupload",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Age1",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "fieldlabel",\
        "max_length_digits",\
        "unique",\
        "encrypted",\
        "removal",\
        "deletion",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "add_to_other_layouts",\
        "number_separator"\
      ],\
      "display_label": "Age1",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000002910018",\
      "created_time": "2024-05-30T23:10:02-07:00",\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": true,\
      "searchable": true,\
      "external": null,\
      "api_name": "Age1",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "integer",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 32,\
      "modified_time": "2024-05-30T23:10:02-07:00",\
      "email_parser": {\
        "fields_update_supported": true,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": true,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 9,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "integer",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": true,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "External",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "fieldlabel",\
        "max_length_digits",\
        "unique",\
        "encrypted",\
        "removal",\
        "deletion",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "add_to_other_layouts",\
        "external_field"\
      ],\
      "display_label": "External",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000002958535",\
      "created_time": "2024-06-05T04:23:13-07:00",\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "External",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 1,\
      "modified_time": "2024-06-05T04:23:13-07:00",\
      "email_parser": {\
        "fields_update_supported": true,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": true,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 255,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "text",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": true,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": false,\
        "api_create": false,\
        "web_create": false,\
        "api_update": false\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Formula Decimal",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "fieldlabel",\
        "removal",\
        "deletion",\
        "tooltip",\
        "add_to_other_layouts",\
        "maximum_decimal",\
        "formula_expression",\
        "number_separator",\
        "assume_default",\
        "dynamic_formula",\
        "conditional_formula",\
        "conditional_formula_expression"\
      ],\
      "display_label": "Formula Decimal",\
      "read_only": true,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000003215072",\
      "created_time": "2024-07-05T03:54:58-07:00",\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": false,\
        "quick_create": false,\
        "create": false\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Formula_Decimal",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "double",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 116,\
      "modified_time": "2024-07-05T03:54:58-07:00",\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": true,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 16,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "formula",\
      "formula": {\
        "return_type": "double",\
        "assume_default": false\
      },\
      "hipaa_compliance_enabled": false,\
      "decimal_place": 7,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": false,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Products",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "fieldlabel",\
        "removal",\
        "deletion",\
        "add_to_other_layouts",\
        "show_linking_module",\
        "linking_module_name",\
        "related_list_label",\
        "related_field_name"\
      ],\
      "display_label": "Products",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": false,\
      "multi_module_lookup": {},\
      "id": "5725767000003466003",\
      "created_time": "2024-07-30T03:29:49-07:00",\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Products",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": true,\
      "json_type": "jsonarray",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 444,\
      "modified_time": "2024-07-30T03:29:49-07:00",\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": true,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 200,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": false,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "multiselectlookup",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {\
        "display_label": "Products1",\
        "linking_module": {\
          "api_name": "LeadsXProducts",\
          "id": "5725767000003466012"\
        },\
        "lookup_apiname": "Leads",\
        "connected_module": {\
          "api_name": "Products",\
          "id": "5725767000000002213"\
        },\
        "api_name": "Products123",\
        "connectedfield_apiname": "Leads",\
        "connectedlookup_apiname": "Products",\
        "id": "5725767000003466147"\
      },\
      "auto_number": {}\
    },\
    {\
      "associated_module": {\
        "module": "Alternate_Address",\
        "id": "5725767000003466776"\
      },\
      "webhook": false,\
      "operation_type": {\
        "web_update": false,\
        "api_create": false,\
        "web_create": false,\
        "api_update": false\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Alternate Address",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": null,\
      "display_label": "Alternate Address",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": false,\
      "multi_module_lookup": {},\
      "id": "5725767000003466894",\
      "created_time": null,\
      "filterable": false,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": false,\
      "external": null,\
      "api_name": "Alternate_Address",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": true,\
      "json_type": "jsonarray",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 500,\
      "modified_time": null,\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": true,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": false,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "subform",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Contact Lookup",\
      "tooltip": {\
        "name": "static_text",\
        "value": "Linked Lead"\
      },\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "fieldlabel",\
        "removal",\
        "deletion",\
        "tooltip",\
        "add_to_other_layouts",\
        "related_list_label",\
        "lookup_filter",\
        "field_of_lookup"\
      ],\
      "display_label": "Contact Lookup",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000003887002",\
      "created_time": "2024-09-08T23:27:07-07:00",\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Contact_Lookup",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "jsonobject",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 133,\
      "modified_time": "2024-09-08T23:27:07-07:00",\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": true,\
      "lookup": {\
        "display_label": "Contact Lookup Testing",\
        "revalidate_filter_during_edit": false,\
        "api_name": "Contact_Lookup_Testing",\
        "module": {\
          "api_name": "A",\
          "crypt": false,\
          "id": "5725767000002086022"\
        },\
        "id": "5725767000003887006",\
        "query_details": {}\
      },\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 120,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "lookup",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Testing GPL",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "fieldlabel",\
        "removal",\
        "deletion",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "history_tracking",\
        "display_value_alphabetically",\
        "default_value",\
        "option_add",\
        "add_to_other_layouts",\
        "color_code",\
        "replace_values"\
      ],\
      "display_label": "Testing GPL",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000004166016",\
      "created_time": "2024-10-10T08:35:07-07:00",\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Testing_GPL",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [\
        {\
          "display_value": "-None-",\
          "sequence_number": 1,\
          "reference_value": "-None-",\
          "colour_code": null,\
          "actual_value": "-None-",\
          "id": "5725767000004166026",\
          "type": "used"\
        },\
        {\
          "display_value": "A.A",\
          "sequence_number": 2,\
          "reference_value": "A",\
          "colour_code": null,\
          "actual_value": "A",\
          "id": "5725767000004166020",\
          "type": "used"\
        },\
        {\
          "display_value": "B.B",\
          "sequence_number": 3,\
          "reference_value": "B",\
          "colour_code": null,\
          "actual_value": "B",\
          "id": "5725767000004166022",\
          "type": "used"\
        },\
        {\
          "display_value": "C",\
          "sequence_number": 4,\
          "reference_value": "C",\
          "colour_code": null,\
          "actual_value": "C",\
          "id": "5725767000004166024",\
          "type": "used"\
        }\
      ],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 2,\
      "modified_time": "2024-10-10T08:35:07-07:00",\
      "email_parser": {\
        "fields_update_supported": true,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": true,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 120,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        }\
      ],\
      "global_picklist": {\
        "api_name": "Testing_GPL",\
        "id": "5725767000004166001"\
      },\
      "history_tracking": null,\
      "data_type": "picklist",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": true,\
      "blueprint_supported": true,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "sakthi Churn Score",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": true,\
      "customizable_properties": [\
        "removal"\
      ],\
      "display_label": "Churned Prediction score from sakthi",\
      "read_only": true,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000004442002",\
      "created_time": "2024-11-04T22:42:30-08:00",\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_only",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_only",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_only",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": true,\
      "searchable": true,\
      "external": null,\
      "api_name": "Churned_Prediction_score_from_sakthi",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "integer",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 32,\
      "modified_time": "2024-11-04T22:42:30-08:00",\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": true,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 9,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "integer",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": false,\
        "api_create": false,\
        "web_create": false,\
        "api_update": false\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Last Note Added",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "fieldlabel",\
        "removal",\
        "deletion",\
        "tooltip",\
        "add_to_other_layouts",\
        "maximum_decimal",\
        "number_separator"\
      ],\
      "display_label": "Last Note Added",\
      "read_only": true,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000005100001",\
      "created_time": "2025-01-03T01:34:14-08:00",\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": false,\
        "quick_create": false,\
        "create": false\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Last_Note_Added",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 118,\
      "modified_time": "2025-01-03T01:34:14-08:00",\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": true,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {\
        "return_type": "datetime",\
        "expression": {\
          "function_parameters": [\
            {\
              "api_name": "Created_Time"\
            }\
          ],\
          "criteria": null,\
          "function": "RECENT"\
        },\
        "based_on_module": {\
          "api_name": "Notes",\
          "id": "5725767000000002197"\
        },\
        "related_list": {\
          "api_name": "Notes",\
          "id": "5725767000000015122"\
        },\
        "rollup_based_on": "related_list"\
      },\
      "length": 120,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "rollup_summary",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": 2,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": false,\
        "api_create": false,\
        "web_create": false,\
        "api_update": false\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Total Notes Added",\
      "tooltip": null,\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "fieldlabel",\
        "removal",\
        "deletion",\
        "tooltip",\
        "add_to_other_layouts",\
        "maximum_decimal",\
        "number_separator"\
      ],\
      "display_label": "Total Notes Added",\
      "read_only": true,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000005100020",\
      "created_time": "2025-01-03T01:34:14-08:00",\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": false,\
        "quick_create": false,\
        "create": false\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Total_Notes_Added",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "integer",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 118,\
      "modified_time": "2025-01-03T01:34:14-08:00",\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": false\
      },\
      "currency": {},\
      "custom_field": true,\
      "lookup": {},\
      "hipaa_compliance": null,\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {\
        "return_type": "integer",\
        "expression": {\
          "function_parameters": [\
            {\
              "api_name": "id"\
            }\
          ],\
          "criteria": null,\
          "function": "COUNT"\
        },\
        "based_on_module": {\
          "api_name": "Notes",\
          "id": "5725767000000002197"\
        },\
        "related_list": {\
          "api_name": "Notes",\
          "id": "5725767000000015122"\
        },\
        "rollup_based_on": "related_list"\
      },\
      "length": 9,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "rollup_summary",\
      "formula": {},\
      "hipaa_compliance_enabled": false,\
      "decimal_place": 2,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Emailll",\
      "tooltip": {\
        "name": "static_text",\
        "value": "Enter email address"\
      },\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "fieldlabel",\
        "unique",\
        "encrypted",\
        "removal",\
        "deletion",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "add_to_other_layouts"\
      ],\
      "display_label": "Emailll",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000005446008",\
      "created_time": "2025-02-12T06:01:35-08:00",\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Emailll",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 25,\
      "modified_time": "2025-02-12T06:01:35-08:00",\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": true,\
      "lookup": {},\
      "hipaa_compliance": {\
        "restricted_in_export": false,\
        "restricted": false\
      },\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 100,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "email",\
      "formula": {},\
      "hipaa_compliance_enabled": true,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "mable",\
      "tooltip": {\
        "name": "static_text",\
        "value": "Enter email address"\
      },\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "fieldlabel",\
        "unique",\
        "encrypted",\
        "removal",\
        "deletion",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "add_to_other_layouts"\
      ],\
      "display_label": "mable",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000005446029",\
      "created_time": "2025-02-12T06:03:21-08:00",\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "mable",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 25,\
      "modified_time": "2025-02-12T06:03:21-08:00",\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": true,\
      "lookup": {},\
      "hipaa_compliance": {\
        "restricted_in_export": false,\
        "restricted": false\
      },\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 100,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "email",\
      "formula": {},\
      "hipaa_compliance_enabled": true,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "mableOne",\
      "tooltip": {\
        "name": "static_text",\
        "value": "Enter email address"\
      },\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "fieldlabel",\
        "unique",\
        "encrypted",\
        "removal",\
        "deletion",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "add_to_other_layouts"\
      ],\
      "display_label": "mableOne",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000005446050",\
      "created_time": "2025-02-12T06:04:00-08:00",\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "mableOne",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 25,\
      "modified_time": "2025-02-12T06:04:00-08:00",\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": true,\
      "lookup": {},\
      "hipaa_compliance": {\
        "restricted_in_export": false,\
        "restricted": false\
      },\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 100,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "email",\
      "formula": {},\
      "hipaa_compliance_enabled": true,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "mableTwo",\
      "tooltip": {\
        "name": "static_text",\
        "value": "Enter email address"\
      },\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "fieldlabel",\
        "unique",\
        "encrypted",\
        "removal",\
        "deletion",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "add_to_other_layouts"\
      ],\
      "display_label": "mableTwo",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000005446071",\
      "created_time": "2025-02-12T06:04:17-08:00",\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "mableTwo",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 25,\
      "modified_time": "2025-02-12T06:04:17-08:00",\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": true,\
      "lookup": {},\
      "hipaa_compliance": {\
        "restricted_in_export": false,\
        "restricted": false\
      },\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 100,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "email",\
      "formula": {},\
      "hipaa_compliance_enabled": true,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    },\
    {\
      "associated_module": null,\
      "webhook": true,\
      "operation_type": {\
        "web_update": true,\
        "api_create": true,\
        "web_create": true,\
        "api_update": true\
      },\
      "colour_code_enabled_by_system": false,\
      "field_label": "Mani",\
      "tooltip": {\
        "name": "static_text",\
        "value": "Enter email address"\
      },\
      "type": "used",\
      "field_read_only": false,\
      "customizable_properties": [\
        "mandatory",\
        "fieldlabel",\
        "unique",\
        "encrypted",\
        "removal",\
        "deletion",\
        "private_field",\
        "tooltip",\
        "hipaa_field",\
        "add_to_other_layouts"\
      ],\
      "display_label": "Mani",\
      "read_only": false,\
      "association_details": null,\
      "businesscard_supported": true,\
      "multi_module_lookup": {},\
      "id": "5725767000005446090",\
      "created_time": "2025-02-12T06:10:45-08:00",\
      "filterable": true,\
      "visible": true,\
      "profiles": [\
        {\
          "permission_type": "read_write",\
          "name": "Administrator",\
          "id": "5725767000000026011"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "Standard",\
          "id": "5725767000000026014"\
        },\
        {\
          "permission_type": "read_write",\
          "name": "asd",\
          "id": "5725767000000871001"\
        }\
      ],\
      "view_type": {\
        "view": true,\
        "edit": true,\
        "quick_create": false,\
        "create": true\
      },\
      "separator": false,\
      "searchable": true,\
      "external": null,\
      "api_name": "Mani",\
      "unique": {},\
      "enable_colour_code": false,\
      "pick_list_values": [],\
      "system_mandatory": false,\
      "virtual_field": false,\
      "json_type": "string",\
      "crypt": null,\
      "created_source": "default",\
      "display_type": -1,\
      "ui_type": 25,\
      "modified_time": "2025-02-12T06:10:45-08:00",\
      "email_parser": {\
        "fields_update_supported": false,\
        "record_operations_supported": true\
      },\
      "currency": {},\
      "custom_field": true,\
      "lookup": {},\
      "hipaa_compliance": {\
        "restricted_in_export": false,\
        "restricted": false\
      },\
      "convert_mapping": {\
        "Contacts": null,\
        "Deals": null,\
        "Accounts": null\
      },\
      "rollup_summary": {},\
      "length": 100,\
      "display_field": false,\
      "pick_list_values_sorted_lexically": false,\
      "sortable": true,\
      "layout_associations": [\
        {\
          "api_name": "Standard__s",\
          "name": "Standard",\
          "id": "5725767000000091055"\
        }\
      ],\
      "global_picklist": null,\
      "history_tracking": null,\
      "data_type": "email",\
      "formula": {},\
      "hipaa_compliance_enabled": true,\
      "decimal_place": null,\
      "mass_update": false,\
      "multiselectlookup": {},\
      "auto_number": {}\
    }\
  ]
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)