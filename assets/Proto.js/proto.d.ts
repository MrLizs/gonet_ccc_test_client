
  namespace proto {
      // DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace message. */
export namespace message {

    /** Properties of a C_G_LoginResquest. */
    interface IC_G_LoginResquest {

        /** C_G_LoginResquest PacketHead */
        PacketHead?: (message.IIpacket|null);

        /** C_G_LoginResquest Key */
        Key?: (number|Long|null);
    }

    /** Represents a C_G_LoginResquest. */
    class C_G_LoginResquest implements IC_G_LoginResquest {

        /**
         * Constructs a new C_G_LoginResquest.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IC_G_LoginResquest);

        /** C_G_LoginResquest PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /** C_G_LoginResquest Key. */
        public Key: (number|Long);

        /**
         * Creates a new C_G_LoginResquest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C_G_LoginResquest instance
         */
        public static create(properties?: message.IC_G_LoginResquest): message.C_G_LoginResquest;

        /**
         * Encodes the specified C_G_LoginResquest message. Does not implicitly {@link message.C_G_LoginResquest.verify|verify} messages.
         * @param message C_G_LoginResquest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IC_G_LoginResquest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_G_LoginResquest message, length delimited. Does not implicitly {@link message.C_G_LoginResquest.verify|verify} messages.
         * @param message C_G_LoginResquest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IC_G_LoginResquest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_G_LoginResquest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_G_LoginResquest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.C_G_LoginResquest;

        /**
         * Decodes a C_G_LoginResquest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_G_LoginResquest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.C_G_LoginResquest;

        /**
         * Verifies a C_G_LoginResquest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_G_LoginResquest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_G_LoginResquest
         */
        public static fromObject(object: { [k: string]: any }): message.C_G_LoginResquest;

        /**
         * Creates a plain object from a C_G_LoginResquest message. Also converts values to other types if specified.
         * @param message C_G_LoginResquest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.C_G_LoginResquest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_G_LoginResquest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a G_C_LoginResponse. */
    interface IG_C_LoginResponse {

        /** G_C_LoginResponse PacketHead */
        PacketHead?: (message.IIpacket|null);

        /** G_C_LoginResponse Key */
        Key?: (number|Long|null);
    }

    /** Represents a G_C_LoginResponse. */
    class G_C_LoginResponse implements IG_C_LoginResponse {

        /**
         * Constructs a new G_C_LoginResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IG_C_LoginResponse);

        /** G_C_LoginResponse PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /** G_C_LoginResponse Key. */
        public Key: (number|Long);

        /**
         * Creates a new G_C_LoginResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns G_C_LoginResponse instance
         */
        public static create(properties?: message.IG_C_LoginResponse): message.G_C_LoginResponse;

        /**
         * Encodes the specified G_C_LoginResponse message. Does not implicitly {@link message.G_C_LoginResponse.verify|verify} messages.
         * @param message G_C_LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IG_C_LoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified G_C_LoginResponse message, length delimited. Does not implicitly {@link message.G_C_LoginResponse.verify|verify} messages.
         * @param message G_C_LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IG_C_LoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a G_C_LoginResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns G_C_LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.G_C_LoginResponse;

        /**
         * Decodes a G_C_LoginResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns G_C_LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.G_C_LoginResponse;

        /**
         * Verifies a G_C_LoginResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a G_C_LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns G_C_LoginResponse
         */
        public static fromObject(object: { [k: string]: any }): message.G_C_LoginResponse;

        /**
         * Creates a plain object from a G_C_LoginResponse message. Also converts values to other types if specified.
         * @param message G_C_LoginResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.G_C_LoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this G_C_LoginResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_A_LoginRequest. */
    interface IC_A_LoginRequest {

        /** C_A_LoginRequest PacketHead */
        PacketHead?: (message.IIpacket|null);

        /** C_A_LoginRequest AccountName */
        AccountName?: (string|null);

        /** C_A_LoginRequest Password */
        Password?: (string|null);

        /** C_A_LoginRequest BuildNo */
        BuildNo?: (string|null);

        /** C_A_LoginRequest Key */
        Key?: (number|Long|null);
    }

    /** Represents a C_A_LoginRequest. */
    class C_A_LoginRequest implements IC_A_LoginRequest {

        /**
         * Constructs a new C_A_LoginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IC_A_LoginRequest);

        /** C_A_LoginRequest PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /** C_A_LoginRequest AccountName. */
        public AccountName: string;

        /** C_A_LoginRequest Password. */
        public Password: string;

        /** C_A_LoginRequest BuildNo. */
        public BuildNo: string;

        /** C_A_LoginRequest Key. */
        public Key: (number|Long);

        /**
         * Creates a new C_A_LoginRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C_A_LoginRequest instance
         */
        public static create(properties?: message.IC_A_LoginRequest): message.C_A_LoginRequest;

        /**
         * Encodes the specified C_A_LoginRequest message. Does not implicitly {@link message.C_A_LoginRequest.verify|verify} messages.
         * @param message C_A_LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IC_A_LoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_A_LoginRequest message, length delimited. Does not implicitly {@link message.C_A_LoginRequest.verify|verify} messages.
         * @param message C_A_LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IC_A_LoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_A_LoginRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_A_LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.C_A_LoginRequest;

        /**
         * Decodes a C_A_LoginRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_A_LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.C_A_LoginRequest;

        /**
         * Verifies a C_A_LoginRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_A_LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_A_LoginRequest
         */
        public static fromObject(object: { [k: string]: any }): message.C_A_LoginRequest;

        /**
         * Creates a plain object from a C_A_LoginRequest message. Also converts values to other types if specified.
         * @param message C_A_LoginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.C_A_LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_A_LoginRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a A_C_LoginResponse. */
    interface IA_C_LoginResponse {

        /** A_C_LoginResponse PacketHead */
        PacketHead?: (message.IIpacket|null);

        /** A_C_LoginResponse Error */
        Error?: (number|null);

        /** A_C_LoginResponse AccountName */
        AccountName?: (string|null);
    }

    /** Represents a A_C_LoginResponse. */
    class A_C_LoginResponse implements IA_C_LoginResponse {

        /**
         * Constructs a new A_C_LoginResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IA_C_LoginResponse);

        /** A_C_LoginResponse PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /** A_C_LoginResponse Error. */
        public Error: number;

        /** A_C_LoginResponse AccountName. */
        public AccountName: string;

        /**
         * Creates a new A_C_LoginResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns A_C_LoginResponse instance
         */
        public static create(properties?: message.IA_C_LoginResponse): message.A_C_LoginResponse;

        /**
         * Encodes the specified A_C_LoginResponse message. Does not implicitly {@link message.A_C_LoginResponse.verify|verify} messages.
         * @param message A_C_LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IA_C_LoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified A_C_LoginResponse message, length delimited. Does not implicitly {@link message.A_C_LoginResponse.verify|verify} messages.
         * @param message A_C_LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IA_C_LoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a A_C_LoginResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns A_C_LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.A_C_LoginResponse;

        /**
         * Decodes a A_C_LoginResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns A_C_LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.A_C_LoginResponse;

        /**
         * Verifies a A_C_LoginResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a A_C_LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns A_C_LoginResponse
         */
        public static fromObject(object: { [k: string]: any }): message.A_C_LoginResponse;

        /**
         * Creates a plain object from a A_C_LoginResponse message. Also converts values to other types if specified.
         * @param message A_C_LoginResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.A_C_LoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this A_C_LoginResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_A_RegisterRequest. */
    interface IC_A_RegisterRequest {

        /** C_A_RegisterRequest PacketHead */
        PacketHead?: (message.IIpacket|null);

        /** C_A_RegisterRequest AccountName */
        AccountName?: (string|null);

        /** C_A_RegisterRequest Password */
        Password?: (string|null);
    }

    /** Represents a C_A_RegisterRequest. */
    class C_A_RegisterRequest implements IC_A_RegisterRequest {

        /**
         * Constructs a new C_A_RegisterRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IC_A_RegisterRequest);

        /** C_A_RegisterRequest PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /** C_A_RegisterRequest AccountName. */
        public AccountName: string;

        /** C_A_RegisterRequest Password. */
        public Password: string;

        /**
         * Creates a new C_A_RegisterRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C_A_RegisterRequest instance
         */
        public static create(properties?: message.IC_A_RegisterRequest): message.C_A_RegisterRequest;

        /**
         * Encodes the specified C_A_RegisterRequest message. Does not implicitly {@link message.C_A_RegisterRequest.verify|verify} messages.
         * @param message C_A_RegisterRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IC_A_RegisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_A_RegisterRequest message, length delimited. Does not implicitly {@link message.C_A_RegisterRequest.verify|verify} messages.
         * @param message C_A_RegisterRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IC_A_RegisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_A_RegisterRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_A_RegisterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.C_A_RegisterRequest;

        /**
         * Decodes a C_A_RegisterRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_A_RegisterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.C_A_RegisterRequest;

        /**
         * Verifies a C_A_RegisterRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_A_RegisterRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_A_RegisterRequest
         */
        public static fromObject(object: { [k: string]: any }): message.C_A_RegisterRequest;

        /**
         * Creates a plain object from a C_A_RegisterRequest message. Also converts values to other types if specified.
         * @param message C_A_RegisterRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.C_A_RegisterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_A_RegisterRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a A_C_RegisterResponse. */
    interface IA_C_RegisterResponse {

        /** A_C_RegisterResponse PacketHead */
        PacketHead?: (message.IIpacket|null);

        /** A_C_RegisterResponse Error */
        Error?: (number|null);
    }

    /** Represents a A_C_RegisterResponse. */
    class A_C_RegisterResponse implements IA_C_RegisterResponse {

        /**
         * Constructs a new A_C_RegisterResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IA_C_RegisterResponse);

        /** A_C_RegisterResponse PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /** A_C_RegisterResponse Error. */
        public Error: number;

        /**
         * Creates a new A_C_RegisterResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns A_C_RegisterResponse instance
         */
        public static create(properties?: message.IA_C_RegisterResponse): message.A_C_RegisterResponse;

        /**
         * Encodes the specified A_C_RegisterResponse message. Does not implicitly {@link message.A_C_RegisterResponse.verify|verify} messages.
         * @param message A_C_RegisterResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IA_C_RegisterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified A_C_RegisterResponse message, length delimited. Does not implicitly {@link message.A_C_RegisterResponse.verify|verify} messages.
         * @param message A_C_RegisterResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IA_C_RegisterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a A_C_RegisterResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns A_C_RegisterResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.A_C_RegisterResponse;

        /**
         * Decodes a A_C_RegisterResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns A_C_RegisterResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.A_C_RegisterResponse;

        /**
         * Verifies a A_C_RegisterResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a A_C_RegisterResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns A_C_RegisterResponse
         */
        public static fromObject(object: { [k: string]: any }): message.A_C_RegisterResponse;

        /**
         * Creates a plain object from a A_C_RegisterResponse message. Also converts values to other types if specified.
         * @param message A_C_RegisterResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.A_C_RegisterResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this A_C_RegisterResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_G_LogoutResponse. */
    interface IC_G_LogoutResponse {

        /** C_G_LogoutResponse PacketHead */
        PacketHead?: (message.IIpacket|null);
    }

    /** Represents a C_G_LogoutResponse. */
    class C_G_LogoutResponse implements IC_G_LogoutResponse {

        /**
         * Constructs a new C_G_LogoutResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IC_G_LogoutResponse);

        /** C_G_LogoutResponse PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /**
         * Creates a new C_G_LogoutResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C_G_LogoutResponse instance
         */
        public static create(properties?: message.IC_G_LogoutResponse): message.C_G_LogoutResponse;

        /**
         * Encodes the specified C_G_LogoutResponse message. Does not implicitly {@link message.C_G_LogoutResponse.verify|verify} messages.
         * @param message C_G_LogoutResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IC_G_LogoutResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_G_LogoutResponse message, length delimited. Does not implicitly {@link message.C_G_LogoutResponse.verify|verify} messages.
         * @param message C_G_LogoutResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IC_G_LogoutResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_G_LogoutResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_G_LogoutResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.C_G_LogoutResponse;

        /**
         * Decodes a C_G_LogoutResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_G_LogoutResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.C_G_LogoutResponse;

        /**
         * Verifies a C_G_LogoutResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_G_LogoutResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_G_LogoutResponse
         */
        public static fromObject(object: { [k: string]: any }): message.C_G_LogoutResponse;

        /**
         * Creates a plain object from a C_G_LogoutResponse message. Also converts values to other types if specified.
         * @param message C_G_LogoutResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.C_G_LogoutResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_G_LogoutResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_W_CreatePlayerRequest. */
    interface IC_W_CreatePlayerRequest {

        /** C_W_CreatePlayerRequest PacketHead */
        PacketHead?: (message.IIpacket|null);

        /** C_W_CreatePlayerRequest PlayerName */
        PlayerName?: (string|null);

        /** C_W_CreatePlayerRequest Sex */
        Sex?: (number|null);
    }

    /** Represents a C_W_CreatePlayerRequest. */
    class C_W_CreatePlayerRequest implements IC_W_CreatePlayerRequest {

        /**
         * Constructs a new C_W_CreatePlayerRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IC_W_CreatePlayerRequest);

        /** C_W_CreatePlayerRequest PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /** C_W_CreatePlayerRequest PlayerName. */
        public PlayerName: string;

        /** C_W_CreatePlayerRequest Sex. */
        public Sex: number;

        /**
         * Creates a new C_W_CreatePlayerRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C_W_CreatePlayerRequest instance
         */
        public static create(properties?: message.IC_W_CreatePlayerRequest): message.C_W_CreatePlayerRequest;

        /**
         * Encodes the specified C_W_CreatePlayerRequest message. Does not implicitly {@link message.C_W_CreatePlayerRequest.verify|verify} messages.
         * @param message C_W_CreatePlayerRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IC_W_CreatePlayerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_W_CreatePlayerRequest message, length delimited. Does not implicitly {@link message.C_W_CreatePlayerRequest.verify|verify} messages.
         * @param message C_W_CreatePlayerRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IC_W_CreatePlayerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_W_CreatePlayerRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_W_CreatePlayerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.C_W_CreatePlayerRequest;

        /**
         * Decodes a C_W_CreatePlayerRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_W_CreatePlayerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.C_W_CreatePlayerRequest;

        /**
         * Verifies a C_W_CreatePlayerRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_W_CreatePlayerRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_W_CreatePlayerRequest
         */
        public static fromObject(object: { [k: string]: any }): message.C_W_CreatePlayerRequest;

        /**
         * Creates a plain object from a C_W_CreatePlayerRequest message. Also converts values to other types if specified.
         * @param message C_W_CreatePlayerRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.C_W_CreatePlayerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_W_CreatePlayerRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a W_C_CreatePlayerResponse. */
    interface IW_C_CreatePlayerResponse {

        /** W_C_CreatePlayerResponse PacketHead */
        PacketHead?: (message.IIpacket|null);

        /** W_C_CreatePlayerResponse Error */
        Error?: (number|null);

        /** W_C_CreatePlayerResponse AccountId */
        AccountId?: (number|Long|null);

        /** W_C_CreatePlayerResponse PlayerId */
        PlayerId?: (number|Long|null);
    }

    /** Represents a W_C_CreatePlayerResponse. */
    class W_C_CreatePlayerResponse implements IW_C_CreatePlayerResponse {

        /**
         * Constructs a new W_C_CreatePlayerResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IW_C_CreatePlayerResponse);

        /** W_C_CreatePlayerResponse PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /** W_C_CreatePlayerResponse Error. */
        public Error: number;

        /** W_C_CreatePlayerResponse AccountId. */
        public AccountId: (number|Long);

        /** W_C_CreatePlayerResponse PlayerId. */
        public PlayerId: (number|Long);

        /**
         * Creates a new W_C_CreatePlayerResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns W_C_CreatePlayerResponse instance
         */
        public static create(properties?: message.IW_C_CreatePlayerResponse): message.W_C_CreatePlayerResponse;

        /**
         * Encodes the specified W_C_CreatePlayerResponse message. Does not implicitly {@link message.W_C_CreatePlayerResponse.verify|verify} messages.
         * @param message W_C_CreatePlayerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IW_C_CreatePlayerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified W_C_CreatePlayerResponse message, length delimited. Does not implicitly {@link message.W_C_CreatePlayerResponse.verify|verify} messages.
         * @param message W_C_CreatePlayerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IW_C_CreatePlayerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a W_C_CreatePlayerResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns W_C_CreatePlayerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.W_C_CreatePlayerResponse;

        /**
         * Decodes a W_C_CreatePlayerResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns W_C_CreatePlayerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.W_C_CreatePlayerResponse;

        /**
         * Verifies a W_C_CreatePlayerResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a W_C_CreatePlayerResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns W_C_CreatePlayerResponse
         */
        public static fromObject(object: { [k: string]: any }): message.W_C_CreatePlayerResponse;

        /**
         * Creates a plain object from a W_C_CreatePlayerResponse message. Also converts values to other types if specified.
         * @param message W_C_CreatePlayerResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.W_C_CreatePlayerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this W_C_CreatePlayerResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_W_Game_LoginRequset. */
    interface IC_W_Game_LoginRequset {

        /** C_W_Game_LoginRequset PacketHead */
        PacketHead?: (message.IIpacket|null);

        /** C_W_Game_LoginRequset PlayerId */
        PlayerId?: (number|Long|null);

        /** C_W_Game_LoginRequset GameType */
        GameType?: (number|null);
    }

    /** Represents a C_W_Game_LoginRequset. */
    class C_W_Game_LoginRequset implements IC_W_Game_LoginRequset {

        /**
         * Constructs a new C_W_Game_LoginRequset.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IC_W_Game_LoginRequset);

        /** C_W_Game_LoginRequset PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /** C_W_Game_LoginRequset PlayerId. */
        public PlayerId: (number|Long);

        /** C_W_Game_LoginRequset GameType. */
        public GameType: number;

        /**
         * Creates a new C_W_Game_LoginRequset instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C_W_Game_LoginRequset instance
         */
        public static create(properties?: message.IC_W_Game_LoginRequset): message.C_W_Game_LoginRequset;

        /**
         * Encodes the specified C_W_Game_LoginRequset message. Does not implicitly {@link message.C_W_Game_LoginRequset.verify|verify} messages.
         * @param message C_W_Game_LoginRequset message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IC_W_Game_LoginRequset, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_W_Game_LoginRequset message, length delimited. Does not implicitly {@link message.C_W_Game_LoginRequset.verify|verify} messages.
         * @param message C_W_Game_LoginRequset message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IC_W_Game_LoginRequset, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_W_Game_LoginRequset message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_W_Game_LoginRequset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.C_W_Game_LoginRequset;

        /**
         * Decodes a C_W_Game_LoginRequset message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_W_Game_LoginRequset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.C_W_Game_LoginRequset;

        /**
         * Verifies a C_W_Game_LoginRequset message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_W_Game_LoginRequset message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_W_Game_LoginRequset
         */
        public static fromObject(object: { [k: string]: any }): message.C_W_Game_LoginRequset;

        /**
         * Creates a plain object from a C_W_Game_LoginRequset message. Also converts values to other types if specified.
         * @param message C_W_Game_LoginRequset
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.C_W_Game_LoginRequset, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_W_Game_LoginRequset to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a W_C_SelectPlayerResponse. */
    interface IW_C_SelectPlayerResponse {

        /** W_C_SelectPlayerResponse PacketHead */
        PacketHead?: (message.IIpacket|null);

        /** W_C_SelectPlayerResponse AccountId */
        AccountId?: (number|Long|null);

        /** W_C_SelectPlayerResponse PlayerData */
        PlayerData?: (message.IPlayerData[]|null);
    }

    /** Represents a W_C_SelectPlayerResponse. */
    class W_C_SelectPlayerResponse implements IW_C_SelectPlayerResponse {

        /**
         * Constructs a new W_C_SelectPlayerResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IW_C_SelectPlayerResponse);

        /** W_C_SelectPlayerResponse PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /** W_C_SelectPlayerResponse AccountId. */
        public AccountId: (number|Long);

        /** W_C_SelectPlayerResponse PlayerData. */
        public PlayerData: message.IPlayerData[];

        /**
         * Creates a new W_C_SelectPlayerResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns W_C_SelectPlayerResponse instance
         */
        public static create(properties?: message.IW_C_SelectPlayerResponse): message.W_C_SelectPlayerResponse;

        /**
         * Encodes the specified W_C_SelectPlayerResponse message. Does not implicitly {@link message.W_C_SelectPlayerResponse.verify|verify} messages.
         * @param message W_C_SelectPlayerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IW_C_SelectPlayerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified W_C_SelectPlayerResponse message, length delimited. Does not implicitly {@link message.W_C_SelectPlayerResponse.verify|verify} messages.
         * @param message W_C_SelectPlayerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IW_C_SelectPlayerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a W_C_SelectPlayerResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns W_C_SelectPlayerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.W_C_SelectPlayerResponse;

        /**
         * Decodes a W_C_SelectPlayerResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns W_C_SelectPlayerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.W_C_SelectPlayerResponse;

        /**
         * Verifies a W_C_SelectPlayerResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a W_C_SelectPlayerResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns W_C_SelectPlayerResponse
         */
        public static fromObject(object: { [k: string]: any }): message.W_C_SelectPlayerResponse;

        /**
         * Creates a plain object from a W_C_SelectPlayerResponse message. Also converts values to other types if specified.
         * @param message W_C_SelectPlayerResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.W_C_SelectPlayerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this W_C_SelectPlayerResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** SERVICE enum. */
    enum SERVICE {
        NONE = 0,
        CLIENT = 1,
        GATESERVER = 2,
        ACCOUNTSERVER = 3,
        WORLDSERVER = 4,
        ZONESERVER = 5,
        WORLDDBSERVER = 6
    }

    /** GameIndex enum. */
    enum GameIndex {
        NOGAMEING = 0,
        DRAWSOMEING = 1
    }

    /** Properties of an Ipacket. */
    interface IIpacket {

        /** Ipacket Stx */
        Stx?: (number|null);

        /** Ipacket DestServerType */
        DestServerType?: (message.SERVICE|null);

        /** Ipacket Ckx */
        Ckx?: (number|null);

        /** Ipacket Id */
        Id?: (number|Long|null);
    }

    /** Represents an Ipacket. */
    class Ipacket implements IIpacket {

        /**
         * Constructs a new Ipacket.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IIpacket);

        /** Ipacket Stx. */
        public Stx: number;

        /** Ipacket DestServerType. */
        public DestServerType: message.SERVICE;

        /** Ipacket Ckx. */
        public Ckx: number;

        /** Ipacket Id. */
        public Id: (number|Long);

        /**
         * Creates a new Ipacket instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Ipacket instance
         */
        public static create(properties?: message.IIpacket): message.Ipacket;

        /**
         * Encodes the specified Ipacket message. Does not implicitly {@link message.Ipacket.verify|verify} messages.
         * @param message Ipacket message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IIpacket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Ipacket message, length delimited. Does not implicitly {@link message.Ipacket.verify|verify} messages.
         * @param message Ipacket message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IIpacket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Ipacket message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Ipacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.Ipacket;

        /**
         * Decodes an Ipacket message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Ipacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.Ipacket;

        /**
         * Verifies an Ipacket message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Ipacket message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Ipacket
         */
        public static fromObject(object: { [k: string]: any }): message.Ipacket;

        /**
         * Creates a plain object from an Ipacket message. Also converts values to other types if specified.
         * @param message Ipacket
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.Ipacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Ipacket to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeardPacket. */
    interface IHeardPacket {
    }

    /** Represents a HeardPacket. */
    class HeardPacket implements IHeardPacket {

        /**
         * Constructs a new HeardPacket.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IHeardPacket);

        /**
         * Creates a new HeardPacket instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeardPacket instance
         */
        public static create(properties?: message.IHeardPacket): message.HeardPacket;

        /**
         * Encodes the specified HeardPacket message. Does not implicitly {@link message.HeardPacket.verify|verify} messages.
         * @param message HeardPacket message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IHeardPacket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeardPacket message, length delimited. Does not implicitly {@link message.HeardPacket.verify|verify} messages.
         * @param message HeardPacket message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IHeardPacket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeardPacket message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeardPacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.HeardPacket;

        /**
         * Decodes a HeardPacket message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeardPacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.HeardPacket;

        /**
         * Verifies a HeardPacket message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeardPacket message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeardPacket
         */
        public static fromObject(object: { [k: string]: any }): message.HeardPacket;

        /**
         * Creates a plain object from a HeardPacket message. Also converts values to other types if specified.
         * @param message HeardPacket
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.HeardPacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeardPacket to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayerData. */
    interface IPlayerData {

        /** PlayerData PlayerID */
        PlayerID?: (number|Long|null);

        /** PlayerData PlayerName */
        PlayerName?: (string|null);

        /** PlayerData PlayerGold */
        PlayerGold?: (number|Long|null);

        /** PlayerData PlayerStatus */
        PlayerStatus?: (number|null);
    }

    /** Represents a PlayerData. */
    class PlayerData implements IPlayerData {

        /**
         * Constructs a new PlayerData.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IPlayerData);

        /** PlayerData PlayerID. */
        public PlayerID: (number|Long);

        /** PlayerData PlayerName. */
        public PlayerName: string;

        /** PlayerData PlayerGold. */
        public PlayerGold: (number|Long);

        /** PlayerData PlayerStatus. */
        public PlayerStatus: number;

        /**
         * Creates a new PlayerData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerData instance
         */
        public static create(properties?: message.IPlayerData): message.PlayerData;

        /**
         * Encodes the specified PlayerData message. Does not implicitly {@link message.PlayerData.verify|verify} messages.
         * @param message PlayerData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IPlayerData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerData message, length delimited. Does not implicitly {@link message.PlayerData.verify|verify} messages.
         * @param message PlayerData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IPlayerData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.PlayerData;

        /**
         * Decodes a PlayerData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.PlayerData;

        /**
         * Verifies a PlayerData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerData
         */
        public static fromObject(object: { [k: string]: any }): message.PlayerData;

        /**
         * Creates a plain object from a PlayerData message. Also converts values to other types if specified.
         * @param message PlayerData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.PlayerData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

  }
  export default proto;
  