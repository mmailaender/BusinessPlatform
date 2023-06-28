
  import {
    AllMethods,
    FirstMethods,
    PaginateData,
    WhereMethods,
    ByIdMethods,
    CreateMethods,
    DeleteMethods,
    ExecMethods,
    PromisifyExecMethods,
    UpdateMethods,
    FirstWhereMethods
  } from 'fqlx-client'
  
export interface Template {
    /**
 * id for the Template
 */
 id: string;
/**
 * name for the Template
 */
 name: string;
/**
 * blocks for the Template
 */
 blocks: Block[];

  }


  export interface TemplateInput {
    /**
 * id for the Template
 */
 id?: string;
/**
 * name for the Template
 */
 name: string;
/**
 * blocks for the Template
 */
 blocks: Block[];

  } 


  export interface TemplateMethods {
      /**
       * all method get the set of all documents in the Template collection.
       * 
       * @param
       * 
       * @returns {AllMethods<Template>} method returns the set of all documents in Template collection for the given range.
       * 
       * @example
       * query.Template.all().exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-all#signature See more...}
       */
      all(): AllMethods<Template>;

      /**
       * create method creates a Template document in the collection with the provided property values.
       * 
       * @param {TemplateInput} input - will be the Template which you want to add.
         * @param { string } input.name Name for the Template
* @param { Block[] } input.blocks Blocks for the Template
       *
       * @returns {CreateMethods<Template>} return new document.
       * 
       * @example
       * query.Template.create({  
 * name: "Value of the name"   
 * blocks: "Value of the blocks"   
       * }).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: TemplateInput): CreateMethods<Template>;

      /**
       * byId method get a Template document by its document ID.
       * This will returns available Fqlx byId methods
       * 
       * @param {string} id - The ID of the document to retrieve
       * 
       * @returns {ByIdMethods<Template, TemplateInput>} return document when it exists and is accessible, else return
       * null when the document does not exist or is inaccessible.
       * 
       * @example
       * query.Template.byId("21545645646554").exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-byid#signature See more...}
       */
       byId(id: string): ByIdMethods<Template, TemplateInput>

       /**
        * first where method get the first matching value from the Set.
        * 
        * @param {(inputCondition: ((data: T) => boolean) | string)} function takes in a document of type T and returns a boolean
        * 
        * @returns {FirstWhereMethods<T>}  returns the first matching value in the Set, or null if the Set is empty or no values match.
        * 
        * @example
        * query.Address.all().firstWhere((data) => data.country == 'uk').exec();
        * OR
        * query.Address.all().firstWhere(`(data) => data.${dynamicKey} == "${dynamicValueToCheck}"`).exec();
        * 
        * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/set/firstwhere#description See more...}
        */
       firstWhere(inputCondition: ((data: Template) => boolean) | string): FirstWhereMethods<Template>;
    }


  export interface Document {
    /**
 * id for the Document
 */
 id: string;
/**
 * owner for the Document
 */
 owner: User;
/**
 * ownerOrg for the Document
 */
 ownerOrg?: Organization;
/**
 * name for the Document
 */
 name: string;
/**
 * blocks for the Document
 */
 blocks: Block[];

  }


  export interface DocumentInput {
    /**
 * id for the Document
 */
 id?: string;
/**
 * owner for the Document
 */
 owner: User;
/**
 * ownerOrg for the Document
 */
 ownerOrg?: Organization;
/**
 * name for the Document
 */
 name: string;
/**
 * blocks for the Document
 */
 blocks: Block[];

  } 


  export interface DocumentMethods {
      /**
       * all method get the set of all documents in the Document collection.
       * 
       * @param
       * 
       * @returns {AllMethods<Document>} method returns the set of all documents in Document collection for the given range.
       * 
       * @example
       * query.Document.all().exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-all#signature See more...}
       */
      all(): AllMethods<Document>;

      /**
       * create method creates a Document document in the collection with the provided property values.
       * 
       * @param {DocumentInput} input - will be the Document which you want to add.
         * @param { User } input.owner Owner for the Document
* @param { Organization } input.ownerOrg OwnerOrg for the Document
* @param { string } input.name Name for the Document
* @param { Block[] } input.blocks Blocks for the Document
       *
       * @returns {CreateMethods<Document>} return new document.
       * 
       * @example
       * query.Document.create({  
 * owner: "Value of the owner"   
 * ownerOrg: "Value of the ownerOrg"   
 * name: "Value of the name"   
 * blocks: "Value of the blocks"   
       * }).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: DocumentInput): CreateMethods<Document>;

      /**
       * byId method get a Document document by its document ID.
       * This will returns available Fqlx byId methods
       * 
       * @param {string} id - The ID of the document to retrieve
       * 
       * @returns {ByIdMethods<Document, DocumentInput>} return document when it exists and is accessible, else return
       * null when the document does not exist or is inaccessible.
       * 
       * @example
       * query.Document.byId("21545645646554").exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-byid#signature See more...}
       */
       byId(id: string): ByIdMethods<Document, DocumentInput>

       /**
        * first where method get the first matching value from the Set.
        * 
        * @param {(inputCondition: ((data: T) => boolean) | string)} function takes in a document of type T and returns a boolean
        * 
        * @returns {FirstWhereMethods<T>}  returns the first matching value in the Set, or null if the Set is empty or no values match.
        * 
        * @example
        * query.Address.all().firstWhere((data) => data.country == 'uk').exec();
        * OR
        * query.Address.all().firstWhere(`(data) => data.${dynamicKey} == "${dynamicValueToCheck}"`).exec();
        * 
        * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/set/firstwhere#description See more...}
        */
       firstWhere(inputCondition: ((data: Document) => boolean) | string): FirstWhereMethods<Document>;
    }


  export interface User {
    /**
 * id for the User
 */
 id?: string;
/**
 * firstName for the User
 */
 firstName?: string;
/**
 * lastName for the User
 */
 lastName?: string;
/**
 * clerkId for the User
 */
 clerkId?: string;
/**
 * email for the User
 */
 email?: string;

  }


  export interface UserInput {
    /**
 * id for the User
 */
 id?: string;
/**
 * firstName for the User
 */
 firstName?: string;
/**
 * lastName for the User
 */
 lastName?: string;
/**
 * clerkId for the User
 */
 clerkId?: string;
/**
 * email for the User
 */
 email?: string;

  } 


  export interface UserMethods {
      /**
       * all method get the set of all documents in the User collection.
       * 
       * @param
       * 
       * @returns {AllMethods<User>} method returns the set of all documents in User collection for the given range.
       * 
       * @example
       * query.User.all().exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-all#signature See more...}
       */
      all(): AllMethods<User>;

      /**
       * create method creates a User document in the collection with the provided property values.
       * 
       * @param {UserInput} input - will be the User which you want to add.
         * @param { string } input.firstName FirstName for the User
* @param { string } input.lastName LastName for the User
* @param { string } input.clerkId ClerkId for the User
* @param { string } input.email Email for the User
       *
       * @returns {CreateMethods<User>} return new document.
       * 
       * @example
       * query.User.create({  
 * firstName: "Value of the firstName"   
 * lastName: "Value of the lastName"   
 * clerkId: "Value of the clerkId"   
 * email: "Value of the email"   
       * }).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: UserInput): CreateMethods<User>;

      /**
       * byId method get a User document by its document ID.
       * This will returns available Fqlx byId methods
       * 
       * @param {string} id - The ID of the document to retrieve
       * 
       * @returns {ByIdMethods<User, UserInput>} return document when it exists and is accessible, else return
       * null when the document does not exist or is inaccessible.
       * 
       * @example
       * query.User.byId("21545645646554").exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-byid#signature See more...}
       */
       byId(id: string): ByIdMethods<User, UserInput>

       /**
        * first where method get the first matching value from the Set.
        * 
        * @param {(inputCondition: ((data: T) => boolean) | string)} function takes in a document of type T and returns a boolean
        * 
        * @returns {FirstWhereMethods<T>}  returns the first matching value in the Set, or null if the Set is empty or no values match.
        * 
        * @example
        * query.Address.all().firstWhere((data) => data.country == 'uk').exec();
        * OR
        * query.Address.all().firstWhere(`(data) => data.${dynamicKey} == "${dynamicValueToCheck}"`).exec();
        * 
        * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/set/firstwhere#description See more...}
        */
       firstWhere(inputCondition: ((data: User) => boolean) | string): FirstWhereMethods<User>;
    }


  export interface Block {
    /**
 * id for the Block
 */
 id?: string;
/**
 * owner for the Block
 */
 owner?: User;
/**
 * ownerOrg for the Block
 */
 ownerOrg?: Organization;
/**
 * type for the Block
 */
 type?: string;
/**
 * name for the Block
 */
 name?: string;
/**
 * category for the Block
 */
 category?: string;
/**
 * content for the Block
 */
 content?: string;

  }


  export interface BlockInput {
    /**
 * id for the Block
 */
 id?: string;
/**
 * owner for the Block
 */
 owner?: User;
/**
 * ownerOrg for the Block
 */
 ownerOrg?: Organization;
/**
 * type for the Block
 */
 type?: string;
/**
 * name for the Block
 */
 name?: string;
/**
 * category for the Block
 */
 category?: string;
/**
 * content for the Block
 */
 content?: string;

  } 


  export interface BlockMethods {
      /**
       * all method get the set of all documents in the Block collection.
       * 
       * @param
       * 
       * @returns {AllMethods<Block>} method returns the set of all documents in Block collection for the given range.
       * 
       * @example
       * query.Block.all().exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-all#signature See more...}
       */
      all(): AllMethods<Block>;

      /**
       * create method creates a Block document in the collection with the provided property values.
       * 
       * @param {BlockInput} input - will be the Block which you want to add.
         * @param { User } input.owner Owner for the Block
* @param { Organization } input.ownerOrg OwnerOrg for the Block
* @param { string } input.type Type for the Block
* @param { string } input.name Name for the Block
* @param { string } input.category Category for the Block
* @param { string } input.content Content for the Block
       *
       * @returns {CreateMethods<Block>} return new document.
       * 
       * @example
       * query.Block.create({  
 * owner: "Value of the owner"   
 * ownerOrg: "Value of the ownerOrg"   
 * type: "Value of the type"   
 * name: "Value of the name"   
 * category: "Value of the category"   
 * content: "Value of the content"   
       * }).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: BlockInput): CreateMethods<Block>;

      /**
       * byId method get a Block document by its document ID.
       * This will returns available Fqlx byId methods
       * 
       * @param {string} id - The ID of the document to retrieve
       * 
       * @returns {ByIdMethods<Block, BlockInput>} return document when it exists and is accessible, else return
       * null when the document does not exist or is inaccessible.
       * 
       * @example
       * query.Block.byId("21545645646554").exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-byid#signature See more...}
       */
       byId(id: string): ByIdMethods<Block, BlockInput>

       /**
        * first where method get the first matching value from the Set.
        * 
        * @param {(inputCondition: ((data: T) => boolean) | string)} function takes in a document of type T and returns a boolean
        * 
        * @returns {FirstWhereMethods<T>}  returns the first matching value in the Set, or null if the Set is empty or no values match.
        * 
        * @example
        * query.Address.all().firstWhere((data) => data.country == 'uk').exec();
        * OR
        * query.Address.all().firstWhere(`(data) => data.${dynamicKey} == "${dynamicValueToCheck}"`).exec();
        * 
        * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/set/firstwhere#description See more...}
        */
       firstWhere(inputCondition: ((data: Block) => boolean) | string): FirstWhereMethods<Block>;
    }


  export interface Organization {
    /**
 * id for the Organization
 */
 id?: string;

  }


  export interface OrganizationInput {
    /**
 * id for the Organization
 */
 id?: string;

  } 


  export interface OrganizationMethods {
      /**
       * all method get the set of all documents in the Organization collection.
       * 
       * @param
       * 
       * @returns {AllMethods<Organization>} method returns the set of all documents in Organization collection for the given range.
       * 
       * @example
       * query.Organization.all().exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-all#signature See more...}
       */
      all(): AllMethods<Organization>;

      /**
       * create method creates a Organization document in the collection with the provided property values.
       * 
       * @param {OrganizationInput} input - will be the Organization which you want to add.
         
       *
       * @returns {CreateMethods<Organization>} return new document.
       * 
       * @example
       * query.Organization.create({  
       * }).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: OrganizationInput): CreateMethods<Organization>;

      /**
       * byId method get a Organization document by its document ID.
       * This will returns available Fqlx byId methods
       * 
       * @param {string} id - The ID of the document to retrieve
       * 
       * @returns {ByIdMethods<Organization, OrganizationInput>} return document when it exists and is accessible, else return
       * null when the document does not exist or is inaccessible.
       * 
       * @example
       * query.Organization.byId("21545645646554").exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-byid#signature See more...}
       */
       byId(id: string): ByIdMethods<Organization, OrganizationInput>

       /**
        * first where method get the first matching value from the Set.
        * 
        * @param {(inputCondition: ((data: T) => boolean) | string)} function takes in a document of type T and returns a boolean
        * 
        * @returns {FirstWhereMethods<T>}  returns the first matching value in the Set, or null if the Set is empty or no values match.
        * 
        * @example
        * query.Address.all().firstWhere((data) => data.country == 'uk').exec();
        * OR
        * query.Address.all().firstWhere(`(data) => data.${dynamicKey} == "${dynamicValueToCheck}"`).exec();
        * 
        * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/set/firstwhere#description See more...}
        */
       firstWhere(inputCondition: ((data: Organization) => boolean) | string): FirstWhereMethods<Organization>;
    }


  export interface Query {
    /**
 * @returns This return fqlx methods for the Template 
 */ 
Template: TemplateMethods;
/**
 * @returns This return fqlx methods for the Document 
 */ 
Document: DocumentMethods;
/**
 * @returns This return fqlx methods for the User 
 */ 
User: UserMethods;
/**
 * @returns This return fqlx methods for the Block 
 */ 
Block: BlockMethods;
/**
 * @returns This return fqlx methods for the Organization 
 */ 
Organization: OrganizationMethods;

  }