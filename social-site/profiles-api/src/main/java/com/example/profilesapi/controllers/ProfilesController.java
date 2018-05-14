package com.example.profilesapi.controllers;

import com.example.profilesapi.models.Profile;
import com.example.profilesapi.repositories.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class ProfilesController {

    @Autowired
    private ProfileRepository profileRepository;

    @GetMapping("/")
    public Iterable<Profile> findAllProfiles() {
        return profileRepository.findAll();
    }

    @GetMapping("/{profileId}")
    public Profile findProfileById(@PathVariable Long profileId) {
        return profileRepository.findOne(profileId);
    }

    @DeleteMapping("/{profileId}")
    public HttpStatus deleteProfileById(@PathVariable Long profileId) {
        profileRepository.delete(profileId);
        return HttpStatus.OK;
    }

    @PostMapping("/")
    public Profile createNewProfile(@RequestBody Profile newProfile) {
        return profileRepository.save(newProfile);

    }

    @PatchMapping("/{profileId}")
    public Profile updateProfileById(@PathVariable Long profileId, @RequestBody Profile profileRequest) {

        Profile profileFromDb = profileRepository.findOne(profileId);

        profileFromDb.setProfileName(profileRequest.getProfileName());
        profileFromDb.setBio(profileRequest.getBio());


        return profileRepository.save(profileFromDb);
    }
}
